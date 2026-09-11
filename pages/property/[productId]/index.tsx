import { useRouter } from "next/router"


const PropertDetail = () => {
    const router = useRouter()
    const { productId } = router.query
    return (
        <div>PROPERTIES DETAIL {productId} </div>
    )
}

export default PropertDetail