// Copyright (C) 2012-2022 Zammad Foundation, https://zammad-foundation.org/

import { getNode } from '@formkit/core'
import { FormKit } from '@formkit/vue'
import { getWrapper } from '@tests/support/components'

const wrapperParameters = {
  form: true,
  formField: true,
}

describe('Form - Field - Hidden (Formkit-BuildIn)', () => {
  it('can render a input', () => {
    const wrapper = getWrapper(FormKit, {
      ...wrapperParameters,
      props: {
        name: 'hidden',
        type: 'hidden',
        id: 'hidden',
        value: 'example-value',
      },
    })

    const input = wrapper.getByDisplayValue('example-value')

    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('id', 'hidden')
    expect(input).toHaveAttribute('type', 'hidden')

    const node = getNode('hidden')
    expect(node?.value).toBe('example-value')
  })
})
