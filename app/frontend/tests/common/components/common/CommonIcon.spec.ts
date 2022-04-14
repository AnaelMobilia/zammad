// Copyright (C) 2012-2022 Zammad Foundation, https://zammad-foundation.org/

import CommonIcon from '@common/components/common/CommonIcon.vue'
import { getWrapper } from '@tests/support/components'

describe('CommonIcon.vue', () => {
  it('renders icon', () => {
    const wrapper = getWrapper(CommonIcon, {
      props: { name: 'arrow-left' },
    })
    expect(wrapper.getIconByName('arrow-left')).toHaveClass('icon')
  })
  it('renders icon with animation', () => {
    const wrapper = getWrapper(CommonIcon, {
      props: { name: 'cog', animation: 'spin' },
    })
    expect(wrapper.getIconByName('cog')).toHaveClass('animate-spin')
  })
  it('renders icon with small size', () => {
    const wrapper = getWrapper(CommonIcon, {
      props: { name: 'cog', size: 'small' },
    })

    expect(wrapper.getIconByName('cog')).toHaveAttribute('width', '20')
    expect(wrapper.getIconByName('cog')).toHaveAttribute('height', '20')
  })
  it('renders a decorative icon', () => {
    const wrapper = getWrapper(CommonIcon, {
      props: { name: 'cog', decorative: true },
    })

    expect(wrapper.getIconByName('cog')).toHaveAttribute('aria-hidden', 'true')
  })
  it('triggers click handler of icon', async () => {
    const wrapper = getWrapper(CommonIcon, {
      props: { name: 'dashboard' },
    })

    await wrapper.events.click(wrapper.getIconByName('dashboard'))

    expect(wrapper.emitted().click).toHaveLength(1)
  })
})
