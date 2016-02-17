#!/usr/bin/ruby
require 'active_support/time'

Time.zone = 'Eastern Time (US & Canada)'
NOW = Time.zone.now

def last_updated()
  lu = NOW.to_s[0..15]
  return lu    # 2015-08-25 12:07
end

def last_updated_hour()
  hr = NOW.to_s[11..12]
  return hr   # 9
end

def display_date()
  dd = NOW.strftime("%B %-d, %Y, %l:%M %P ET")
  dd = dd.to_s.sub(/pm/, 'p.m.').sub(/am/, 'a.m.').sub(':00', '')
  return dd   # August 21, 2015, 9 a.m. ET
end
