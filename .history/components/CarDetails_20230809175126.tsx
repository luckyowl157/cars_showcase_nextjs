import { CarProps } from '@/types'
import Image from 'next/image'

interface CarDetailsProps {
  isOpen: boolean,
  closeModal: () => void
  car: CarProps
}

const CarDetails = () => {
  return (
    <div>CarDetails</div>
  )
}

export default CarDetails