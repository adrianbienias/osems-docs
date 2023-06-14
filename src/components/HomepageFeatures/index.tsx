import React from "react"
import clsx from "clsx"
import styles from "./styles.module.css"

const FeatureList = [
  {
    title: "Build email lists",
    Svg: require("@site/static/img/email-lists.svg").default,
    description: (
      <>
        Your contacts, your database. Store it for free up to 5 GB (that's
        millions of emails!).
      </>
    ),
  },
  {
    title: "Send newsletters",
    Svg: require("@site/static/img/newsletters.svg").default,
    description: (
      <>Send newsletters for your lists. Exclude some of them if you want.</>
    ),
  },
  {
    title: "Create autoresponders",
    Svg: require("@site/static/img/autoresponders.svg").default,
    description: (
      <>
        Schedule queues of messages to be sent with a precise delay after
        contacts' signup.
      </>
    ),
  },
]

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
