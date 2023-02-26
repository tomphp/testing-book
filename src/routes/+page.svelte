<script>
  import LeadParagraph from "../components/document/LeadParagraph.svelte";
  import Section from "../components/document/Section.svelte";
  import Todo from "../components/document/Todo.svelte";
  import Example from "../components/document/Example.svelte";
  import Important from "../components/document/Important.svelte";
</script>

<LeadParagraph>
  <strong>Testing Strategies</strong> gives you quick guidance on approaches for automating the testing of different
  aspects of your system.
</LeadParagraph>

<Section title="Why Test">
  <p>
    When building <em>software systems</em>, we want enough tests in place to give us the <strong>confidence</strong>
    that we can deploy to production. While <a href="/glossary#continuous-deployment">Continuous Deployment</a> might
    not be your end goal, testing to a level where you have enough confidence to do so is a worthy aspiration.
  </p>
</Section>

<Section title="Approach">
  <p>
    This resource serves as a strategy cookbook that gives you options for automating the testing of different aspects
    of your system. These aspects include:
  </p>

  <ul class="list-disc list-inside p-5 text-lg">
    <li><a href="/software-testing">Software Testing</a></li>
    <li>User Interface Testing <Todo/></li>
    <li>Integration Testing <Todo/></li>
    <li>Security Testing <Todo/></li>
    <li>Performance Testing <Todo/></li>
    <li>Infrastructure Testing <Todo/></li>
    <li>Specialist Testing (e.g. AI, data processing) <Todo/></li>
  </ul>

  <p>
    Depending on your circumstance different approaches to testing might be viable. Rather than
    presenting you with the <em>one true way</em> to test a specific thing, we present the options and the pros and cons of
    each. Often, a better approach to testing will be to change your system architecture, we will suggest approaches
    that will advocate this, but also alternatives for when it is not possible.
  </p>
</Section>

<Section title="Testing Layers">
  <p>
    To gain full confidence in our automated tests, they need to cover <strong>every</strong> piece of the system.
    However, can appear to be an impossible task. Here's why:
  </p>

  <Example>
    <p>Let us take just three example components of a system, they are simple functions.</p>

    <p>
      The logic in the first component has two branches, and the logic in the second and third components has three
      branches each.
    </p>

    <p>
      When testing each component individually, you need at least as many tests are there are branches to test them
      completely.
    </p>

    <p>
      Now let us consider the system as a whole, where the output of each component is fed into the next. Each unique
      combination of paths through the components is a unique path through the system. In this case, there are
      <strong>2 x 3 x 3</strong> paths that need to be tested, giving us a minimum of <strong>18</strong> tests we need
      to create.
    </p>
  </Example>

  <p>
    Now consider a system with hundreds of components, each with many paths. It would be impossible to write and
    maintain that many tests. This is where <em>testing layers</em> come in.
  </p>

  <p>
    Instead of writing many tests which test all the components <em>integrated</em>, we can test the individual
    components in isolation. Now knowing that the individual components work, we can test they work together with a
    minimal amount of <em>integration tests</em>. We no longer need to test every possible combination of paths because
    we already have the confidence in the individual components.
  </p>

  <Example>
    <p>
      Continuing with the example above, we can have <strong>2 + 3 + 3</strong> tests for the individual components, and
      perhaps <strong>3</strong> integration tests to test the system as a whole. This has halved the number of tests to
      <strong>9</strong>.
    </p>
  </Example>

  <Important>
    <p>
      We are only able to use a few integration tests because we are confident that everything has been tested at the
      lower layer!
    </p>
  </Important>

  <p>
    We need to take this approach with all our testing. We want to test the individual parts at a granular level, and
    then fill the gaps with tests at the higher levels.
  </p>

  <h3>Legacy Systems</h3>

  <p>
    When building <a href="/glossary#green-field">green-field</a> systems, you have the privilege of being able to
    build the layers of testing from the ground up, while also designing the system to be testable. However, often we
    are working with legacy systems, where creating automated tests is hard.
  </p>

  <p>
    In these situations, you have to approach adding automated testing as a journey. You might get a lot of value
    from adding a few complicated tests at a higher level in the beginning. In time, you may even remove these initial
    tests as your lower-level tests become more comprehensive.
  </p>

  <Important>
    <p>
      One common trap is that once a few of these higher-level tests are in place, people keep adding them instead of
      focusing on testing at the appropriate levels. This can lead to a situation where the tests are slow, brittle and
      hard to maintain. This in turn slows the team down and can reduce confidence in the tests.
    </p>
  </Important>

  <p>
    One final point to note about adding tests to legacy systems is that you should not be afraid to change the system
    to make it more testable. By doing this, you will not only be able to easily test the system, but you will also be
    improving the design and ability to make changes in the future.
  </p>
</Section>



<style lang="postcss">
  /*
  :global(html) {
    background-color: theme(colors.gray.100);
  }
  */
</style>
