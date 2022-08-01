interface Content {
    subtitle: string;
}
const SubTitle = ({subtitle}:Content): JSX.Element => {
  return (
    <div className='h2-subtitle' 
    style={{
            color: "var(--brown)", 
            textAlign: "center", letterSpacing: "2px"}}
    >
        <h2>{subtitle}</h2>
    </div>
  )
}

export default SubTitle;