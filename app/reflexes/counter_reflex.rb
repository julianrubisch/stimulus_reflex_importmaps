# frozen_string_literal: true

class CounterReflex < ApplicationReflex
  def increment(step = 1)
    session[:count] = session[:count].to_i + step
  end
end
