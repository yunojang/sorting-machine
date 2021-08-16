function SortingForm(props) {
  return(
    <form onSubmit={props.onSubmit}>
      <input 
        onChange = {props.onChange}
        value = {props.value}
        type='text' 
        placeholder='"숫자,숫자,숫자.. 형식으로 입력하세요"' 
      />

      <input type='submit' />
    </form>
  )
}

export default SortingForm;