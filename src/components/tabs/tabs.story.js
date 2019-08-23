import React from "react";
import { storiesOf } from "@storybook/react";
import { Tabs } from "./tabs";
import { Tab } from "../tab/tab";
import { StorybookConstants as constants } from "../../stories/utils";

const addTabs = (setActive, i) => (
  <>
    <Tab name="first" index="0" active={i === 0} setActive={setActive(0)}>
      Integer lacinia tortor erat, eu aliquam est pharetra sed. Vivamus dapibus
      felis sapien, ut dictum eros molestie vitae. Vivamus ac massa mollis,
      sollicitudin odio vitae, gravida ex. Aliquam quis accumsan elit. In
      vestibulum enim eget eros sodales sagittis. Mauris ultrices tortor ac enim
      scelerisque, ac rhoncus diam interdum.
    </Tab>
    <Tab name="second" index="1" active={i === 1} setActive={setActive(1)}>
      <h1>Eros elit condimentum</h1>
      <p>
        Maecenas pulvinar ipsum a enim porttitor eleifend. Pellentesque velit
        justo, ultrices rhoncus arcu quis, blandit dictum risus. Pellentesque
        pulvinar, sapien eget consectetur iaculis, eros elit condimentum nibh,
        sit amet venenatis lacus dui in magna. Suspendisse non porta odio. Proin
        id velit ac mi egestas elementum. Nunc suscipit tortor eget consectetur
        finibus. Vestibulum ante ipsum primis in faucibus orci luctus et
        ultrices posuere cubilia Curae; Duis accumsan diam magna, eu pulvinar
        nibh pellentesque eu. Etiam ut turpis a sem cursus varius.
      </p>
      <h2>Mauris laoreet</h2>
      <p>
        Mauris laoreet justo id nisi luctus, nec dictum nunc laoreet. Vestibulum
        condimentum lacus vitae odio consequat viverra. Cras gravida lorem et
        tortor vehicula, et viverra metus vulputate. In condimentum ac justo in
        luctus. Ut interdum nibh malesuada massa tristique placerat. Donec at
        sapien nec arcu dignissim efficitur. Nullam ut pharetra quam. Praesent
        eu ex id turpis consectetur molestie et et nisl. Nunc venenatis odio eu
        sollicitudin dictum.
      </p>
    </Tab>
    <Tab name="third" index="2" active={i === 2} setActive={setActive(2)}>
      Morbi suscipit sapien augue, sed venenatis enim dapibus ac. Vivamus odio
      tortor, placerat blandit leo vitae, interdum dictum velit. Duis quis
      sapien a tellus gravida porttitor vitae in est. Proin elementum arcu
      ipsum, id varius nunc congue eu. Ut a tellus in arcu varius elementum sed
      ut eros. Mauris convallis eget orci in consequat. Curabitur non pharetra
      enim. Etiam fringilla felis eu risus accumsan placerat. Nam facilisis
      hendrerit consectetur. Sed id quam efficitur ex placerat sagittis ut sit
      amet elit. Donec at ipsum in erat fermentum finibus. Curabitur ultricies
      ac ex sed lobortis. Vivamus feugiat a risus et sollicitudin. Vestibulum
      eleifend magna vitae libero dignissim, sit amet porta sem imperdiet.
    </Tab>
  </>
);

storiesOf(`${constants.components}/Tabs`, module)
  .add("default", () => <Tabs name="default">{addTabs}</Tabs>)
  .add("in context", () => (
    <>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet
        lacinia mi, in pulvinar mauris volutpat sit amet. Donec scelerisque quis
        nulla at faucibus. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos. Suspendisse egestas eu nibh id
        mattis. Curabitur iaculis orci sed consequat condimentum. Nullam
        vestibulum efficitur est, a finibus nulla aliquet et. Morbi ac
        consectetur ante. Cras commodo fermentum nisl, vitae scelerisque nunc
        laoreet sed. Ut quis nunc sit amet elit placerat congue. Aliquam at orci
        ex. Sed tempus nec tellus a ultrices. Praesent euismod sagittis justo,
        et blandit ante. Donec elementum, orci ac placerat elementum, leo velit
        rutrum velit, id porta ex nunc quis lectus. Aliquam pellentesque urna
        quis pulvinar lobortis. Morbi vestibulum maximus tellus, vel
        pellentesque dui fringilla vel.
      </p>
      <Tabs name="default">{addTabs}</Tabs>
      <p>
        Nam accumsan in erat eget efficitur. Proin faucibus malesuada gravida.
        Nullam tincidunt elit ac efficitur aliquet. Maecenas quis nulla quis ex
        maximus suscipit vitae a dolor. Nullam venenatis erat vitae tristique
        efficitur. Suspendisse risus ligula, euismod vel bibendum vitae,
        tristique sit amet sapien. Integer lacinia tortor erat, eu aliquam est
        pharetra sed. Vivamus dapibus felis sapien, ut dictum eros molestie
        vitae. Vivamus ac massa mollis, sollicitudin odio vitae, gravida ex.
        Aliquam quis accumsan elit. In vestibulum enim eget eros sodales
        sagittis. Mauris ultrices tortor ac enim scelerisque, ac rhoncus diam
        interdum. Cras maximus, erat sit amet mollis hendrerit, nisl odio
        vehicula nunc, non convallis nibh odio at sem. Nulla in ornare sem, et
        venenatis augue. Aenean rutrum augue sit amet posuere scelerisque.
      </p>
    </>
  ));
