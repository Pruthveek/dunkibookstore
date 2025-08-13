import CustomButton from '@/components/ui/Buttons'
import { Search } from 'lucide-react'
import React from 'react'

export default function SearchBox() {
  return (
    <div className=" flex items-center max-w-sm border border-gray-100 overflow-hidden py-1 px-2">
      <input
        type="text"
        placeholder="Search..."
        className="w-full outline-0"
      />
      <CustomButton variant="ghost" className='inline-flex items-center gap-1'><Search size={16}/> Search</CustomButton>
    </div>  
  )
}
