const labelText = (label: string) => {
  return label ? `${label}は` : ''
}

export const ja = {
  mixed: {
    default: ({ label }) => `${labelText(label)}無効です`,
    required: ({ label }) => `${labelText(label)}必須の入力項目です`,
    oneOf: ({ label, values }) => `${labelText(label)}次の値のいずれかでなければなりません:${values}`,
    notOneOf: ({ label, values }) => `${labelText(label)}次の値のいずれかであってはなりません:${values}`,
    notType: `形式が違います`,
    defined: ``,
  },
  string: {
    length: ({ label, length }) => `${labelText(label)}${length}文字でなければなりません`,
    min: ({ label, min }) => `${labelText(label)}少なくとも${min}文字でなければなりません`,
    max: ({ label, max }) => `${labelText(label)}最大${max}文字でなければなりません`,
    matches: ({ label, regex }) => `${labelText(label)}次の形式と一致する必要があります: "${regex}"`,
    email: ({ label }) => `${labelText(label)}メールアドレス形式である必要があります`,
    url: ({ label }) => `${labelText(label)}有効なURLでなければなりません`,
    uuid: ({ label }) => `${labelText(label)}有効なUUIDでなければなりません`,
    trim: ({ label }) => `${labelText(label)}前後にスペースを入れてはいけません`,
    lowercase: ({ label }) => `${labelText(label)}小文字でなければなりません`,
    uppercase: ({ label }) => `${labelText(label)}大文字でなければなりません`,
  },
  number: {
    min: ({ label, min }) => `${labelText(label)}${min}以上である必要があります`,
    max: ({ label, max }) => `${labelText(label)}${max}以下でなければなりません`,
    lessThan: ({ label, less }) => `${labelText(label)}${less}より小さくなければなりません`,
    moreThan: ({ label, more }) => `${labelText(label)}${more}より大きくなければなりません`,
    positive: ({ label }) => `${labelText(label)}正の数でなければなりません`,
    negative: ({ label }) => `${labelText(label)}負の数でなければなりません`,
    integer: ({ label }) => `${labelText(label)}整数でなければなりません`,
  },
  date: {
    min: ({ label, min }) => `${labelText(label)}${min}より後でなければなりません`,
    max: ({ label, max }) => `${labelText(label)}${max}より前でなければなりません`,
  },
  boolean: {
    isValue: ({ label }) => `${labelText(label)}値が必要です`,
  },
  object: {
    noUnknown: ({ label }) => `${labelText(label)}オブジェクトシェイプで指定されていないキーを含めることはできません`,
  },
  array: {
    length: ({ label, length }) => `${labelText(label)}${length}個が必要です`,
    min: ({ label, min }) => `${labelText(label)}${min}個以上の項目が必要です`,
    max: ({ label, max }) => `${labelText(label)}${max}個以下の項目が必要です`,
  },
}
