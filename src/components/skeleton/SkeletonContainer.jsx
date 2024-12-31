import SkeletonCard from "./SkeletonCard"

const skdata = Array(6).fill(null);
const SkeletonContainer = () => {
  return (
    <div className="grid grid-cols-2 h-full justify-center items-center bg-red-200 gap-3">
        {
            skdata.map((_, index) => {
                return <SkeletonCard key={index}/>
            })
        }
        
    </div>
  )
}

export default SkeletonContainer