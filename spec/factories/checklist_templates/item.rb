# Copyright (C) 2012-2024 Zammad Foundation, https://zammad-foundation.org/

FactoryBot.define do
  factory :'checklist_template/item', aliases: %i[checklist_template_item] do
    checklist_template

    text { Faker::Lorem.unique.sentence }
  end
end
