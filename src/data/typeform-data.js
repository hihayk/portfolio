import React from 'react'
import StorySection from '../components/story-section'
import ImageSection from '../components/image-section'
import StoryShot from '../components/story-shot'
import CustomLink from '../components/custom-link'
import Tabs from '../components/tabs'
import SubSection from '../components/sub-section'

const specTabs = [
  {
    tabName: 'Space',
    tabContent: <StoryShot srcList={[ require('../assets/images/typeform/sp-space.png') ]} backgroundImage={require('../assets/images/typeform/sp-bg.png')} />
  },
  {
    tabName: 'Layout',
    tabContent: <StoryShot srcList={[ require('../assets/images/typeform/sp-layout.png') ]} backgroundImage={require('../assets/images/typeform/sp-bg.png')} />
  },
  {
    tabName: 'Typography',
    tabContent: <StoryShot srcList={[ require('../assets/images/typeform/sp-typography.png') ]} backgroundImage={require('../assets/images/typeform/sp-bg.png')} />
  },
  {
    tabName: 'Components',
    tabContent: <StoryShot srcList={[ require('../assets/images/typeform/sp-components.png') ]} backgroundImage={require('../assets/images/typeform/sp-bg.png')} />
  }
]

export const typeformData = {
  path: '/typeform',
  title: 'KITT',
  titleSuffix: 'Typeform Design System',
  roleTags: ['UI architecture', 'Design', 'Frontend development', 'Documentation website'],
  content: (
    <div>
      <StorySection theme='dark'>

        <SubSection>

          <h2>The challenge</h2>
          <p>
            The main challenge was to create a unified design language and provide tools and assets to designers and developers so that they can further evolve the product. This language would be used by designers every day so they would need to contribute to its definition. I personally wanted to build all this without slowing down any other projects.
          </p>

          <h3>Constraints</h3>
          <p>
            When I joined, the company was focused on building a new version of the product. All designers and developers had this project prioritized so it was challenging to sell the idea of building a design system. All though I was hired to do this, I still had to make a case for it.
          </p>

          <h3>Selling a design system</h3>
          <p>
            Before selling it I had to explain what design systems are. This meant having meetings and casual conversations with teammates about the benefits and how it would solve actual problems in our teams. But of course, it's better to prove by doing so very soon I started to work on it.
          </p>

          <h2>The first steps</h2>
          <p>
            Before planning and designing, it was important to understand how the design team works, what's their current workflow, what's working and what's not. I organized 1-1 meetings with designers to answer these questions. Each designer was working on a small team and was responsible for a specific part of the product. This meant a greater focus on less amount of problems but also a disconnection from the overall design.
          </p>
          <h2>Designing the system</h2>
          <h3>Variables</h3>
          <p>
            It can be tempting to start designing components right away in Sketch/Figma, but components are composed of tiny decisions that first need to be defined. When building UI libraries I like to start by defining the variables: text sizes, colors, shadows, etc. To create variables for this design system, I analyzed all the design files and extracted patterns.
          </p>

          <ImageSection imgSrc={require('../assets/images/typeform/unit.png')}>
            <h3>The unit</h3>
            <p>
              The unit is the increment number used for spacing and sizing. For this design system, I proposed 8px. So any spacing in the product should be multiple of 8px, for example, 16px or 32px. Same rules apply for sizing: the height or the width of any component should be multiple of 8px. This is not an absolute rule and sometimes exceptions are needed, but that's ok.
            </p>
          </ImageSection>

          <ImageSection imgSrc={require('../assets/images/typeform/colors.png')}>
            <h3>Dynamic colors</h3>
            <p>
              Traditionally to create color pallets designers manually define the colors and its lighter and darker shades. In our case, we had many colors and it was not clear when and if we will need variants for all of them. So instead of manually defining them, I built a small utility that given a color returns lighter and darker shades.
            </p>
          </ImageSection>
        </SubSection>

        <SubSection>
          <h3>The Visual Guide</h3>
        </SubSection>

        <SubSection hasFullWidth>
          <StoryShot
            srcList={[
              require('../assets/images/typeform/vg-space.png'),
              require('../assets/images/typeform/vg-type.png'),
              require('../assets/images/typeform/vg-shadows.png'),
              require('../assets/images/typeform/vg-radius.png'),
            ]}
            caption='Visual Guide page.'
            rows={2}
          />
        </SubSection>

        <SubSection>


          <h3>Icons</h3>
          <p>
            We had an icon library with inconsistent styles and multiple sizes per icon. There was an opportunity to unify the style and create one size that works for all use cases.
          </p>

          <StoryShot
            srcFolder="typeform"
            srcList2={[
              'icons-preview.svg',
            ]}
            rows={1}
          />
          <StoryShot
            srcList={[
              require('../assets/images/typeform/icons.png'),
            ]}
            caption='Custom icon set.'
          />

          <h3>Choosing a Typeface</h3>
          <p>
            We needed a typeface that is functional but still has character. After some exploration and testing, we chose the wonderful GT America by Grilli Type.
          </p>
          <StoryShot
            srcFolder="typeform"
            srcList2={[
              'type.svg',
            ]}
          />

          <h3>Components</h3>
          <p>
            The components had to be as agnostic as possible to cover many use cases. Having the variables defined it was much easier to make design decisions. For instance, a button component should uses variables to define its text size, height, border radius, text color and background color. It's like all components are attached by invisible strings to variables. This produces consistency and makes it easier to scale. It makes visual decision making less arbitrary.
          </p>
        </SubSection>

        <SubSection hasFullWidth>
          <StoryShot
            srcList={[
              require('../assets/images/typeform/components-mix.png'),
            ]}
            rows={1}
          />
          <StoryShot
            srcList={[
              require('../assets/images/typeform/components.png'),
            ]}
            rows={1}
            caption='Components index page.'
          />
        </SubSection>
        <SubSection>
          <ImageSection imgSrc={require('../assets/images/typeform/layouts.png')}>
            <h3>Composition</h3>
            <p>
              When developers compose a design with components most of the time they solve recurrent problems like defining the spacing between elements or laying down content in columns. To handle these repeated tasks I created layout components that manage layout and spacing without the need for writing custom styles. Here are some examples:
            </p>
            <p><strong>Spacer</strong> adds space between any 2 elements.
            <strong> Distribute</strong> adds consistent spacing between multiple elements.
            <strong> Split</strong> creates complex layouts with configurable columns.</p>
          </ImageSection>

          <h2>Developing the system</h2>
          <p>
            As soon as I defined the first variables, I started developing the system in React. It was important to write the code almost in parallel to the design process to make sure the design made sense from the development perspective. Also, I find it much easier to connect variables to components using code.
          </p>
          <h3>Using React.js</h3>
          <p>
            Building design systems with React makes a lot of sense to me. It's great for component scoping and defining custom properties. For this project, I used styled components and thankfully this led to the migration of all our team's projects to styled components.
          </p>
          <h3>Storybook</h3>
          <p>
            Storybook is great for component development but it lacks tools for documentation, granted it's not made for that purpose. Building a documentation tool was overkill in the initial stage so we customized our Storybook to provide some documentation.
          </p>
          <StoryShot
            srcList={[
              require('../assets/images/typeform/sb-button.png'),
            ]}
            rows={1}
            caption='Button component example with use cases and code snippets.'
          />

          <h2>Granular adoption</h2>

          <p>
            No matter how amazing a design system is, it's hard to stop and spend time adopting it. So I decided to make adoption granular. If I knew a team is working on a login screen, I would provide the necessary components before they started the development. They would only need to import and use components from the system. This resulted in less work for the team and higher design system adoption.
          </p>

          <StoryShot
            srcList={[
              require('../assets/images/typeform/ds-process.svg'),
            ]}
            align='left'
            rows={1}
          />

          <h3>Refactoring</h3>
          <p>
            In general, developers understand the concept of modularity, especially when they use a library like React. I regularly did pull requests in repositories that used the design system, refactoring and replacing parts of the interface with components. To me, it was important to be on both sides of the development: as a component developer and user.
          </p>

          <h3>Seduction vs imposition</h3>
          <p>
            Being just another teammate I had no power to impose the use of the design system, so I had to work much harder to convince my teammates. The system needed to solve actual everyday problems and speed up all projects. It had to speak the design language of the design team and It had to be straight forward for developers to understand.
          </p>

          <h2>The system applied</h2>

          <Tabs tabsObject={specTabs} />

          <h2>The design system team</h2>
          <p>
            As I was building a tool for developers I needed to be confident that I'm providing the best code quality but I'm more a designer than a developer so I needed a developer partner. I thought that the design system project should be scoped in a team. After some conversation with development, design and product management we established a team and incorporated a front-end developer. He pushed the code to a more mature state introducing documentation, testing and tools.
          </p>
        </SubSection>

      </StorySection>

      <StorySection theme='light'>
        <SubSection>

        <h2>The system in the wild</h2>

        <StoryShot
          srcList={[
            require('../assets/images/typeform/integrate.png'),
          ]}
          rows={1}
          caption={
            <span>
              Integration screen with the design system by <CustomLink href='https://github.com/josepmartins' target='_blank' size='sizeN1'>@josepmartins</CustomLink>
            </span>
          }
        />
        <StoryShot
          srcList={[
            require('../assets/images/typeform/embed.png'),
          ]}
          rows={1}
          caption={
            <span>
              Share screen with the design system by <CustomLink href='https://github.com/josepmartins' target='_blank' size='sizeN1'>@josepmartins</CustomLink>
            </span>
          }
        />
        <StoryShot
          srcList={[
            require('../assets/images/typeform/unsplash.png'),
          ]}
          rows={1}
          caption={
            <span>
              Unsplash integration built with the design system by <CustomLink href='https://github.com/josepmartins' target='_blank' size='sizeN1'>@josepmartins</CustomLink>
            </span>
          }
        />
        <StoryShot
          srcList={[
            require('../assets/images/typeform/settings.png'),
          ]}
          rows={1}
          caption={
            <span>
              Settings built with the design system by <CustomLink href='http://lucian.es' target='_blank' size='sizeN1'>@lucian</CustomLink>
            </span>
          }
        />
        </SubSection>
      </StorySection>
    </div>
  ),
}
