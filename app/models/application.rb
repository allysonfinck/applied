class Application
  attr_reader :id, :date_applied, :company, :job_title, :application_link, :email_response_link, :contact_name, :contact_email, :user_id

  if(ENV['DATABASE_URL'])
    uri = URI.parse(ENV['DATABASE_URL'])
    DB = PG.connect(uri.hostname, uri.port, nil, nil, uri.path[1..-1], uri.user, uri.password)
  else
    DB = PG.connect(host: 'localhost', port: 5432, dbname: 'job_tracker')
  end


  def initialize(opts = {})
    @id = opts['id'].to_i
    @date_applied = opts['date_applied']
    @company = opts['company']
    @job_title = opts['job_title']
    @application_link = opts['application_link']
    @email_response_link = opts['email_response_link']
    @contact_name = opts['contact_name']
    @contact_email = opts['contact_email']
    @user_id = opts['user_id'].to_i
  end

  def self.all
    results = DB.exec("SELECT * FROM applications;")
    return results.map{|result| Application.new(result)}
  end

  def self.find(id)
    results = DB.exec("SELECT * FROM applications WHERE id=#{id};")
    return Application.new(results.first)
  end

  def self.create(opts = {})
    results = DB.exec(
      <<-SQL
        INSERT INTO applications (date_applied, company, job_title, application_link, email_response_link, contact_name, contact_email, user_id)
        VALUES ('#{opts["date_applied"]}', '#{opts["company"]}', '#{opts["job_title"]}', '#{opts["application_link"]}', '#{opts["email_response_link"]}', '#{opts["contact_name"]}', '#{opts["contact_email"]}', #{opts["user_id"]})
        RETURNING id, date_applied, company, job_title, application_link, email_response_link, contact_name, contact_email, user_id;
      SQL
    )
    return Application.new(results.first)
  end

  def self.delete(id)
    results = DB.exec("DELETE FROM applications WHERE id=#{id};")
    return {deleted: true}
  end

  def self.update(id, opts={})
    results = DB.exec(
      <<-SQL
        UPDATE applications
        SET
        date_applied='#{opts["date_applied"]}',
        company='#{opts["company"]}',
        job_title='#{opts["job_title"]}',
        application_link='#{opts["application_link"]}',
        email_response_link='#{opts["email_response_link"]}',
        contact_name='#{opts["contact_name"]}',
        contact_email='#{opts["contact_email"]}',
        user_id=#{opts["user_id"]}
        WHERE id=#{id}
        RETURNING id, date_applied, company, job_title, application_link, email_response_link, contact_name, contact_email, user_id;
      SQL
    )
    return Application.new(results.first)
  end
end
