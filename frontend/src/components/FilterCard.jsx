import React from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'

const filterData = [
    {
        filterType:'Location',
        array:["Delhi NCR" , "Bengaluru", "Hyderabad"]
    },
    {
        filterType:'Industry',
        array:["Kolkata","Pune","Kochi","Chandigarh"]
    },
    {
        filterType:'Salary',
        array:["0-40K" , "43-60K", "60-90K","1lakh-5lakh","5lakh-10lakh","10lakh-15lakh","15lakh-30lakh"]
    },
]
const FilterCard = () => {
  return (
    <div className='w-full bg-white p-3 rounded-md'>
      <h1 className='font-bold text-lg'>FilterJobs</h1>
      <hr className='mt-3' />
      <RadioGroup>
        {
            filterData.map((data,index) => (
                <div>
                    <h1 className='font-bold text-lg'>{data.filterType}</h1>
                    {
                        data.array.map((item, index) => {
                            return (
                                <div className='flex items-center space-x-2 my-2'>
                                    <RadioGroupItem value={item}/>
                                    <Label>{item}</Label>
                                    </div>
                            )
                        })
                    }
                </div>
            ))
        }
      </RadioGroup>
    </div>
  )
}

export default FilterCard

