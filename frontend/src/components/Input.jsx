
const Input = ({...props}) => {
  return (
    <div className="w-full h-[50px] overflow-hidden rounded-md flex justify-start items-center bg-[#EEEEEE]">
        <input {...props} type="text" className="w-full h-full rounded-md p-2 bg-transparent border-none outline-black" />
    </div>
  )
}

export default Input