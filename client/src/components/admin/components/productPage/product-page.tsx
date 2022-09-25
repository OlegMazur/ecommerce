import React from 'react'
import { IDevice } from '../../../../store/redusers/deviceSlice/deviceSlice'
interface IProp{
    activeProduct?:IDevice
}
function ProductPage({activeProduct}:IProp) {
  return (
    <div>ProductPage
        <div>{activeProduct?.name}</div>
    </div>
  )
}

export default ProductPage