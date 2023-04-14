const items: { title: string; text: string }[] = [
  {
    title: "What is a dashboard?",
    text: `In this day and age, understanding data is the key to making the best decisions
    for any business. However, the amount of information that’s available at any time can
    be overwhelming for the most data-savvy person.
  So what’s the key to making data-driven decisions? Finding the
   most important data and formatting it in a way that’s easy to understand. This can change,
    depending on who will view the data. If you’re an industry expert, you may find complex 
    data easier to understand. If you’re presenting data to less well-versed stakeholders at 
    your company, you may need to simplify it before sharing it with others.
  One of the easiest ways to make data easy to understand for technical and non-technical 
  audiences is to create a dashboard that easily displays all of your data visualizations
   in one place.
  `,
  },
  {
    title: "Dashboard definition",
    text: `In this day and age, understanding data is the key to making the best
  decisions for any business. However, the amount of information that’s
  available at any time can be overwhelming for the most data-savvy
  person. So what’s the key to making data-driven decisions? Finding the
  most important data and formatting it in a way that’s easy to
  understand. This can change, depending on who will view the data. If
  you’re an industry expert, you may find complex data easier to
  understand. If you’re presenting data to less well-versed stakeholders
  at your company, you may need to simplify it before sharing it with
  others. One of the easiest ways to make data easy to understand for
  technical and non-technical audiences is to create a dashboard that
  easily displays all of your data visualizations in one place.`,
  },

  { title: "", text: `` },
  { title: "", text: `` },
  { title: "", text: `` },
  { title: "", text: `` },
];

const listItems = items.map((item, index) => {
  return (
    <div key={index} className="">
      <p className="text-xl">{item.title}</p>
      <p>{item.text}</p>
    </div>
  );
});

export function About() {
  return (
    <div className="">
      <p className="text-3xl center">What is a dashboard?</p>
      <p>
        In this day and age, understanding data is the key to making the best
        decisions for any business. However, the amount of information that’s
        available at any time can be overwhelming for the most data-savvy
        person.
      </p>
      <p>
        So what’s the key to making data-driven decisions? Finding the most
        important data and formatting it in a way that’s easy to understand.
        This can change, depending on who will view the data. If you’re an
        industry expert, you may find complex data easier to understand. If
        you’re presenting data to less well-versed stakeholders at your company,
        you may need to simplify it before sharing it with others.
      </p>
      <p>
        One of the easiest ways to make data easy to understand for technical
        and non-technical audiences is to create a dashboard that easily
        displays all of your data visualizations in one place.
      </p>
      <ul className="list-disc mx-10">
        <li>Dashboard definition</li>
        <li>How dashboards work</li>
        <li>Uses</li>
        <li>Importance</li>
        <li>How to create a dashboard</li>
        <li>Types of dashboards</li>
        <li>Best practices</li>
        <li>Benefits</li>
      </ul>
      {listItems}
      <p>Dashboard definition</p>
      <p>
        A dashboard is a way of displaying various types of visual data in one
        place. Usually, a dashboard is intended to convey different, but related
        information in an easy-to-digest form. And oftentimes, this includes
        things like key performance indicators (KPI)s or other important
        business metrics that stakeholders need to see and understand at a
        glance. Dashboards are useful across different industries and verticals
        because they’re highly customizable. They can include data of all sorts
        with varying date ranges to help you understand: what happened, why it
        happened, what may happen, and what action you should take. And since
        dashboards use visualizations like tables, graphs, and charts, others
        who aren’t as close to the data can quickly and easily understand the
        story it tells or the insights it reveals.
      </p>
      <p></p>
      <p>
        Tempor orci dapibus ultrices in iaculis nunc sed augue lacus. In
        pellentesque massa placerat duis ultricies. Sit amet massa vitae tortor
        condimentum. Morbi tincidunt augue interdum velit euismod. Aliquet enim
        tortor at auctor urna nunc id. A scelerisque purus semper eget. Vitae
        justo eget magna fermentum iaculis. Arcu non odio euismod lacinia at
        quis. Et leo duis ut diam quam nulla porttitor massa. Eget nunc
        scelerisque viverra mauris. Suscipit tellus mauris a diam maecenas sed
        enim. Cras sed felis eget velit aliquet. Est placerat in egestas erat
        imperdiet sed euismod nisi porta. In ante metus dictum at tempor
        commodo. In cursus turpis massa tincidunt dui ut ornare lectus. Tempus
        iaculis urna id volutpat. Iaculis eu non diam phasellus vestibulum lorem
        sed risus.
      </p>
      <p>
        Ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel.
        Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper
        malesuada. Faucibus pulvinar elementum integer enim neque volutpat.
        Gravida arcu ac tortor dignissim convallis aenean. Lectus quam id leo in
        vitae. Ultricies tristique nulla aliquet enim tortor. Nec tincidunt
        praesent semper feugiat nibh sed. Imperdiet proin fermentum leo vel orci
        porta non pulvinar neque. Praesent semper feugiat nibh sed pulvinar
        proin gravida. Dis parturient montes nascetur ridiculus mus mauris.
        Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Ut
        lectus arcu bibendum at. Integer enim neque volutpat ac. Diam sit amet
        nisl suscipit. Eros donec ac odio tempor orci dapibus ultrices in
        iaculis. Ullamcorper a lacus vestibulum sed arcu non odio euismod. Quis
        lectus nulla at volutpat diam ut. Turpis egestas integer eget aliquet.
        Adipiscing tristique risus nec feugiat in fermentum posuere. Morbi
        tempus iaculis urna id. Amet commodo nulla facilisi nullam vehicula
        ipsum a arcu.
      </p>
      <p>
        Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui.
        Praesent semper feugiat nibh sed pulvinar. Ultrices gravida dictum fusce
        ut placerat orci nulla pellentesque. Malesuada proin libero nunc
        consequat interdum varius sit amet. Lectus quam id leo in vitae. Sed
        viverra tellus in hac habitasse platea dictumst. Vivamus at augue eget
        arcu. Augue mauris augue neque gravida in.
      </p>
      <p>
        Tincidunt vitae semper quis lectus nulla at volutpat diam. Gravida
        dictum fusce ut placerat. Erat velit scelerisque in dictum non. Tempus
        quam pellentesque nec nam aliquam sem et tortor consequat. Eu nisl nunc
        mi ipsum faucibus. Cras fermentum odio eu feugiat pretium nibh. Vel
        pharetra vel turpis nunc eget lorem dolor sed viverra. Sollicitudin
        tempor id eu nisl nunc mi ipsum faucibus. Sed id semper risus in
        hendrerit gravida rutrum. Eget nulla facilisi etiam dignissim. Erat
        imperdiet sed euismod nisi. Risus in hendrerit gravida rutrum quisque
        non tellus orci ac.
      </p>
    </div>
  );
}
