module ApplicationHelper
  def flash_messages(&block)
    return unless flash
    content = ""
    flash.each do |key, message|
      message = [message] unless message.is_a? Array
      message.each do |text|
        content << capture(key, text, &block)
      end
    end
    content.html_safe
  end
end
