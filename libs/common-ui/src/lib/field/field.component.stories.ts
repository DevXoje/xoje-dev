import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { FieldComponent } from './field.component';

export default {
  title: 'FieldComponent',
  component: FieldComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<FieldComponent>;

const Template: Story<FieldComponent> = (args: FieldComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}