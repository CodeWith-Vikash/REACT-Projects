import React from 'react'

const About = () => {
  return (
    <div className='min-h-[80vh] pt-5'>
      <div className='flex flex-col items-center text-[1.4rem] font-semibold'>
      <h3>About us</h3>
      <div className='h-[7px] w-[200px] rounded-full bg-blue-600'></div>
      </div>
      <p className='text-center py-2 leading-5 font-semibold text-gray-700 px-[10vw]'>Indicart, founded in May 2024 by CEO Vikash Kumar, is an innovative e-commerce platform dedicated to delivering an exceptional online shopping experience. With a vision to revolutionize the digital marketplace, Indicart offers a vast array of high-quality products across various categories, catering to the diverse needs of modern consumers. Under the astute leadership of Mr. Kumar, the company prioritizes customer satisfaction, ensuring a seamless and secure shopping journey from browsing to delivery.

Indicart stands out for its commitment to integrating the latest technological advancements to enhance user experience. By employing sophisticated algorithms and user-friendly interfaces, the platform personalizes shopping experiences, making it intuitive and enjoyable for customers. The company's robust logistics network ensures timely and efficient delivery, reinforcing its reputation for reliability and trustworthiness.

In addition to its technological prowess, Indicart places a strong emphasis on ethical business practices and sustainability. The company actively partners with eco-friendly brands and supports local artisans, promoting responsible consumerism. Through these initiatives, Indicart not only meets the demands of today's environmentally conscious shoppers but also contributes positively to the community.

Mr. Vikash Kumar's entrepreneurial spirit and strategic vision have been instrumental in driving Indicart's rapid growth and success. His leadership fosters a culture of innovation, continuous improvement, and customer-centricity within the company. As Indicart continues to expand its offerings and reach, it remains committed to its core values of quality, integrity, and excellence, striving to set new standards in the e-commerce industry.</p>
      <section className='flex flex-wrap items-center justify-center gap-4 py-5'>
        <img src="/building2.jfif" alt="" className='w-[300px] h-[250px] object-cover object-center rounded card'/>
        <img src="/inside2.jfif" alt="" className='w-[300px] h-[250px] object-cover object-center rounded card'/>
        <img src="/inside1.jfif" alt="" className='w-[300px] h-[250px] object-cover object-center rounded card'/>
        <img src="inside3.jfif" alt="" className='w-[300px] h-[250px] object-cover object-center rounded card'/>
      </section>
    </div>
  )
}

export default About