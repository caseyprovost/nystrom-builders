module NavigationHelper
  class MenuLink
    cattr_accessor :current_url
    cattr_accessor :helper

    attr_accessor :text
    attr_accessor :href

    def initialize(attrs)
      attrs.each_pair{ |attr, value| send("#{attr}=", value) }
    end

    def current?
      current_url == href
    end

    def render
      helper.content_tag(:li, class: current? ? 'current' : '') do
        helper.link_to(text, href)
      end
    end
  end

  def menu_links
    MenuLink.current_url = request.fullpath
    MenuLink.helper = self

    @menu_links = [
      MenuLink.new(text: 'Home', href: root_path),
      MenuLink.new(text: 'What We Do', href: about_path),
      MenuLink.new(text: 'Projects', href: projects_path),
      MenuLink.new(text: 'Get a Quote', href: quote_request_path)
    ]
  end
end
