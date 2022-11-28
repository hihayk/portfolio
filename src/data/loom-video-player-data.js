import React from 'react'
import StorySection from '../components/story-section'
import StoryShot from '../components/story-shot'
import SubSection from '../components/sub-section'


export const loomVideoPlayerData = {
  path: '/loom-video-player',
  title: 'Loom Video Player',
  subtitle: 'Complete rebuild with a dedicated UI system and development environment',
  roleTags: ['UI architecture', 'Frontend development', 'Documentation website'],
  content: (
    <div>
      <StorySection theme='dark'>
        <SubSection>
          <StoryShot
            srcFolder="loom-video-player"
            srcList2={[
              'loom-video-player-26.png',
            ]}
          />
          <StoryShot
            srcFolder="loom-video-player"
            srcList2={[
              'loom-video-player-28.png',
            ]}
          />

          <h2>
            Built with Lens system
          </h2>
          <p>
            Lens, my main responsability at Loom, is the design system that powers all Loom products.
          </p>
          <StoryShot
            srcFolder="loom-video-player"
            srcList2={[
              'loom-video-layer-detail-1.png',
              'loom-video-layer-detail-2.png',
            ]}
            rows={2}
          />
        </SubSection>

        <SubSection>
          <h2>Components</h2>
          <p>
            The player uses a mix of Lens and custom components, these are used to build multiple player variants with different configurations.
          </p>
        </SubSection>

        <SubSection hasFullWidth>
          <StoryShot
            srcFolder="loom-video-player"
            srcList2={[
              'loom-video-player-22.png',
              'loom-video-player-23.png',
              'loom-video-player-24.png',
            ]}
            rows={3}
          />
        </SubSection>

        <SubSection>
          <h2>
            Scaling system
          </h2>
          <p>
            The player is composied on a grid that instead of a px value, uses a fraction of the viewport width. This allows the player to scale to any size, while keeping the same proportions.
          </p>

          <StoryShot
            gap="var(--space2)"
            srcFolder="loom-video-player"
            srcList2={[
              'player-grid-s.svg',
              'player-grid-m.svg',
              'player-grid-l.svg',
            ]}
            rows={`${12/8}fr 1fr ${7/8}fr`}
          />
        </SubSection>

        <SubSection>
          <h2>Custom development environment</h2>
          <p>
            A space that allows us to develop and test the player in isolation, without the need to run the whole app.
          </p>
          <StoryShot
            srcFolder="loom-video-player"
            srcList2={[
              'loom-video-player-3.png',
            ]}
          />
        </SubSection>

        <SubSection>
          <h3>Light/dark mode for visual testing</h3>
          <StoryShot
            srcFolder="loom-video-player"
            srcList2={[
              'loom-video-player-2.png',
              'loom-video-player-1.png',
            ]}
            rows={2}
          />
        </SubSection>
      </StorySection>
    </div>
  ),
}
