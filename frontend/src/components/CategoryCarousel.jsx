import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { Button } from './ui/button'

const category = [
          'Frontend Developer',
          'Backend Developer ',
          'Full Stack Developer',
          'DevOps Engineer',
          'Mobile App Developer',
          'Desktop Application Developer ',
          'Data Scientist',
          'Data Analyst',
          'Machine Learning Engineer',
          'System Administrator',
          'Database Administrator (DBA)',
          'Ethical Hacker',
          'Cybersecurity Analyst',
          'Manual Tester',
          'Product Manager',
          'Performance Tester ',
          'Automation Tester ',
          'Security Engineer',
          'Compliance Analyst'
]
const CategoryCarousel = () => {
  return (
    <div>
      <Carousel className='w-full max-w-xl mx-auto my-20'>
        <CarouselContent>
            {
                category.map((cat, index) =>(
                    <CarouselItem className='md:basis-1/2 lg-basis-1/3'>
                      <Button variant='outline' className='rounded-full'>{cat}</Button>
                   </CarouselItem>
                ))
            }
        </CarouselContent>
        <CarouselPrevious/>
        <CarouselNext/>
      </Carousel>
    </div>
  )
}

export default CategoryCarousel

