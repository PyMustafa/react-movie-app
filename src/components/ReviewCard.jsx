const ReviewCard = ({review}) => {
    return(
        <div className="bg-white rounded-lg shadow-md p-4 mb-6 m-5">
        <div className="flex items-center mb-4">
          <div className=" flex items-center justify-center ">
            reviewer username here
          </div>
         
        </div>
        <div className="prose max-w-none">
          <p className="text-gray-700">review content review content review content review content review content review content review content review content review content review content review content review contentv</p>
        </div>
       rating details here
          <div className="mt-4 flex items-center">
            <p className="text-yellow-500 font-bold mr-2">
              ★ detailed rating /10 - put an actual number
            </p>
            <p className="text-gray-500 text-sm">User Rating</p>
          </div>
        
      </div>
    )
}
export default ReviewCard