/**
 * Created by Joy on 2017. 4. 13..
 */
let initialState = {
  contents: [],
  selectedContent: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'FETCH_DATA':
      return {
        contents: {
          1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut accumsan elit eget tellus facilisis bibendum. Nulla lacinia sem et elit elementum, dignissim ultricies tortor cursus. Nam aliquet viverra risus ut convallis. Duis metus ante, dictum et consectetur porta, lacinia sed libero. Curabitur placerat molestie urna, at laoreet dui blandit ut. Nullam fringilla faucibus erat, nec ornare risus pharetra vitae. Phasellus pretium volutpat sem. Quisque eu libero in ipsum rhoncus pellentesque id sed ligula.',
          2: 'Proin consectetur ipsum non quam laoreet vestibulum. Nam iaculis enim ut eleifend rutrum. Phasellus ultricies tincidunt vestibulum. In hac habitasse platea dictumst. Suspendisse convallis pharetra eros ac pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula massa at ante consequat, vitae convallis odio scelerisque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
          3: 'Nunc venenatis ullamcorper nunc vel congue. Sed eleifend augue vitae dolor vehicula efficitur. Sed bibendum malesuada turpis nec vehicula. Nullam varius mollis ligula ac placerat. Curabitur dapibus dictum nibh a rutrum. Ut eu orci massa. Sed sapien diam, porttitor in tincidunt eget, finibus at elit. Suspendisse potenti. Quisque ornare magna a sem lobortis sagittis. Proin quis condimentum augue. Aliquam quis elit ac felis dapibus mattis.',
          4: 'Nam malesuada velit et augue luctus pharetra. Fusce quis ultrices nibh. Donec blandit interdum urna convallis iaculis. Ut dapibus mi vitae feugiat varius. Sed sollicitudin urna ac massa sodales vehicula. Suspendisse purus metus, varius id facilisis vel, congue id ante. Donec sed erat volutpat risus bibendum dapibus et in nisi. Phasellus fringilla porta magna, ac rhoncus felis ornare at. Donec massa augue, semper sit amet vehicula ac, pretium ut elit.',
          5: 'Fusce sit amet varius nunc. Aenean in facilisis lectus. Suspendisse vitae vehicula erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras imperdiet, mi ac consequat laoreet, diam nisl rhoncus diam, sit amet tristique erat libero ac sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam in pharetra lectus, a egestas enim. Fusce in placerat diam. Integer consequat ex et justo consectetur venenatis. Sed mauris augue, condimentum et diam quis, lobortis placerat diam. Nullam sed mauris eu eros placerat auctor. In congue ante vel turpis tempus fermentum.'
        }
      };
    case 'CLICK_TAB':
      return {
        ...state,
        selectedContent: state.contents[action.key]
      };
    default:
      return state;
  }
}