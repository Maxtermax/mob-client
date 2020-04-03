function allSpace(data = "") {
  let spaces = 0;
  for (let i = 0; i < data.length; i++) {
    const result = /\s/g.test(data[i]);
    if (result) spaces++;
  }
  const result = spaces === data.length;
  return result;
}

export function validText(data = "") {
  // eslint-disable-next-line
  const result = /[(\r\n|\r|\n)A-Za-záéëËíóúÁÉÍÓÚñÑ0-9_:#$&/*¡;%?=()"\]\, /[/.-]{2,500}/gi.exec(
    data
  );
  const inRange = data.length >= 2 && data.length <= 500;
  if (result)
    return result[0].length === data.length && inRange && !allSpace(data);
  return false;
}
