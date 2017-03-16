function render(component) {
  var html;
  var isNative = component.name.charCodeAt(0) >= 97 && component.name.charCodeAt(0) <= 122;

  if (isNative) html = `<${component.name}>`;

  if (component.props.children) {
    for (var i = 0; i < component.props.children; ++i) {
      html += render(component.props.children[i]);
    }
  } 

  if (isNative) html += `</${component.name}>`;

  return html;
}
