import React from 'react'
import StorySection from '../components/story-section'
import ImageSection from '../components/image-section'
import StoryShot from '../components/story-shot'
import CustomLink from '../components/custom-link'
import Shot from '../components/shot'
import ShotText from '../components/shot-text'
import travelperk10 from '../assets/images/travelperk/travelperk10-hayk-an-design.gif'
import travelperk11 from '../assets/images/travelperk/travelperk11-hayk-an-design.png'
import travelperk12 from '../assets/images/travelperk/travelperk12-hayk-an-design.png'
import travelperk13 from '../assets/images/travelperk/travelperk13-hayk-an-design.png'
import travelperk14 from '../assets/images/travelperk/travelperk14-hayk-an-design.png'
import travelperk15 from '../assets/images/travelperk/travelperk15-hayk-an-design.png'
import travelperk18 from '../assets/images/travelperk/travelperk18-hayk-an-design.png'
import travelperk19 from '../assets/images/travelperk/travelperk19-hayk-an-design.png'
import travelperk21 from '../assets/images/travelperk/travelperk21-hayk-an-design.png'
import travelperk22 from '../assets/images/travelperk/travelperk22-hayk-an-design.png'
import travelperk23 from '../assets/images/travelperk/travelperk23-hayk-an-design.png'
import travelperk24 from '../assets/images/travelperk/travelperk24-hayk-an-design.png'
import travelperk25 from '../assets/images/travelperk/travelperk25-hayk-an-design.png'
import travelperk26 from '../assets/images/travelperk/travelperk26-hayk-an-design.png'

export const travelperkData = {
  path: '/travelperk',
  title: 'Travelperk',
  subtitle: 'Product Design and System',
  role: (
    <div>
      Design and develop the design system
      <br />
      Design the product
    </div>
  ),
  content: (
    <div>
      <StorySection>
        <h2>The challenge</h2>

        <p>When I joined the team, the product was in its early stages. Some new features were in the design process but not in development. We couldn't predict in which direction the product would grow and the only assumption was that we would have more features in the future. I saw an opportunity to simplify our designs and make sure these are easy to develop for our high paced team.</p>

        
        <ImageSection imgSrc={travelperk10}>
          <h3>Understanding development</h3>

          <p>It was important to understand how our developers build our designs so I started learning our development. For front-end we used React. Previously I worked mainly with HTML and CSS so I had to learn more Javascript.</p>
        </ImageSection>

        <h2>The design system</h2>

        <p>There were some visual guidelines created by my teammates but there was dedicated time to building a design system. Understanding React and how it affects to modularization helped me to translate the visual guidelines to variables and to better align components.</p>
        
        <StoryShot srcList={[ travelperk18, travelperk21, travelperk24, travelperk22, travelperk23 ]} rows={5} />
   
      </StorySection>

      <StorySection theme='light' backgroundColor='#dee2e7'>
        <h2>The product</h2>
        <StoryShot src={travelperk11} caption='Login page.' />
        <StoryShot src={travelperk26} caption='Hotel search.' />
        <StoryShot srcList={[travelperk12, travelperk13]} rows={2} caption='Hotel search components.' />
        <StoryShot src={travelperk25} caption='Company settings.' />
        <StoryShot src={travelperk14} caption='Reporting page.' />
      </StorySection>
    </div>
  )
}