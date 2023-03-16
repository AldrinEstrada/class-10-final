import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import { FormattedMessage, useIntl } from 'react-intl'
import Link from 'next/link'


export default function Home({ dir }) {
  
  const { locales } = useRouter();
  const intl = useIntl();

  const title = intl.formatMessage({ id: "page.home.head.title"});
  const description = intl.formatMessage({id: "page.home.head.meta.description"});

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" hrefLang='x-default' />
        <link rel="icon" href="/favicon.ico" hrefLang='en' />
        <link rel="icon" href="/favicon.ico" hrefLang='fr' />
      </Head>
      
      <header>
        <div>
          {[...locales].sort().map((locale) => (
            <Link key={locale} href="/" locale={locale}>
              <div>{locale}</div>
            </Link>
          ))}
        </div>
      </header>


      <main dir={dir} className={styles.main}>

        <div className={styles.header}>
          <div className={styles.utility_header}>
            <a href="https://learn.bcit.ca">
              <FormattedMessage id="utility.learninghub"/>
            </a>
            <a href="https://my.bcit.ca">
              <FormattedMessage id="utility.mybcit"/>
            </a>
            <a href="https://bcit.ca/current-students/">
              <FormattedMessage id="utility.students"/>
            </a>
            <a href="https://bcit.ca/faculty-staff/">
              <FormattedMessage id="utility.staff"/>
            </a>
            <a href="https://bcit.ca/events/">
              <FormattedMessage id="utility.events"/>
            </a>

          </div>

          <div className={styles.navbar}>
            <div className={styles.logo}></div>
            <p><FormattedMessage id="header.courses"/></p>
            <p><FormattedMessage id="header.admission"></FormattedMessage></p>
            <p><FormattedMessage id="header.services"></FormattedMessage></p>
            <p><FormattedMessage id="header.research"></FormattedMessage></p>
            <p><FormattedMessage id="header.about"></FormattedMessage></p>
          </div>
        </div>

        <div className={styles.breadcrumbs}>
          <p><FormattedMessage id="breadcrumb.study"></FormattedMessage></p>
          <p><FormattedMessage id="breadcrumb.business"></FormattedMessage></p>
          <p><FormattedMessage id="breadcrumb.d3"></FormattedMessage></p>
        </div>

        <div className={styles.coursebanner}>
          <h1><FormattedMessage id="coursebanner.title"></FormattedMessage></h1>
          <p><FormattedMessage id="coursebanner.diploma"></FormattedMessage></p>
          <p><FormattedMessage id="coursebanner.fulltime"></FormattedMessage></p>
          <p><FormattedMessage id="coursebanner.department"></FormattedMessage></p>
        </div>

        <div className={styles.submenu_title}>
          <p><FormattedMessage id="submenu.header"/></p>
        </div>

        <div className={styles.submenu}>
          <p><FormattedMessage id="submenu.overview"/></p>
          <p><FormattedMessage id="submenu.entrance"/></p>
          <p><FormattedMessage id="submenu.placement"/></p>
          <p><FormattedMessage id="submenu.cost"/></p>
          <p><FormattedMessage id="submenu.courses"/></p>
          <p><FormattedMessage id="submenu.details"/></p>
          <p><FormattedMessage id="submenu.graduation"/></p>
          <p><FormattedMessage id="submenu.contact"/></p>
          <p><FormattedMessage id="submenu.subscribe"/></p>
        </div>

        <div className={styles.infosessions}>
          <h3><FormattedMessage id="infosessions.header"/></h3>
          <p><FormattedMessage id="infosessions.info"/></p>
          <ul>
            <li><FormattedMessage id="infosessions.april"/></li>
            <li><FormattedMessage id="infosessions.may"/></li>
            <li><FormattedMessage id="infosessions.june"/></li>
            <li><FormattedMessage id="infosessions.july"/></li>
          </ul>

          <p><FormattedMessage id="infosessions.explore"/></p>

        </div>

        <div className={styles.overview}>
          <h3><FormattedMessage id="overview.header"/></h3>
          <p>
            <strong><FormattedMessage id="overview.credential"/></strong>
            <FormattedMessage id="overview.credentialinfo"/>
          </p>
          <p>
            <strong><FormattedMessage id="overview.format"/></strong>
            <FormattedMessage id="overview.formatinfo"/>
          </p>
          <p>
            <strong><FormattedMessage id="overview.length"/></strong>
            <FormattedMessage id="overview.lengthinfo"/>
          </p>
          <p>
            <strong><FormattedMessage id="overview.start"/></strong>
            <FormattedMessage id="overview.startinfo"/>
          </p>
          <p>
            <strong><FormattedMessage id="overview.campus"/></strong>
            <FormattedMessage id="overview.campusinfo"/>
          </p>
          <p>
            <strong><FormattedMessage id="overview.domtuition"/></strong>
            <FormattedMessage id="overview.domtuitioninfo"/>
          </p>
          <p>
            <strong><FormattedMessage id="overview.intertuition"/></strong>
            <FormattedMessage id="overview.intertuitioninfo"/>
          </p>
          <p><FormattedMessage id="overview.courses"/></p>

        </div>

        <div className={styles.course_content}>
          <h1><FormattedMessage id="course_content.entrance"/></h1>
          <h2><FormattedMessage id="course_content.application"/></h2>
          <p><FormattedMessage id="course_content.applicationinfo"/></p>

          <h2><FormattedMessage id="course_content.entrancereq"/></h2>
          <p><FormattedMessage id="course_content.entrancereqinfo"/></p>
          <ul className={styles.entrancereq_list}>
            <li>
              <strong><FormattedMessage id="entrancereq_list.eng"/></strong>
              <FormattedMessage id="entrancereq_list.options"/>
            </li>
            <li><FormattedMessage id="entrancereq_list.eng12"/></li>
            <li><FormattedMessage id="entrancereq_list.engfirst"/></li>
            <li><FormattedMessage id="entrancereq_list.otherhigh"/></li>
            <li><FormattedMessage id="entrancereq_list.otherpost"/></li> 

          </ul>
          <p><FormattedMessage id="course_content.whatif"/></p>
          <p><FormattedMessage id="course_content.readother"/></p>

          <h2><FormattedMessage id="course_content.recommend"/></h2>
          <ul className={styles.courserecommend}>
            <li><FormattedMessage id="course.recommendsuccess"/></li>
          </ul>

          <h2><FormattedMessage id="course_content.international"/></h2>
          <p><FormattedMessage id="course_content.internationalinfo1"/></p>
          <p><FormattedMessage id="course_content.internationalinfo2"/></p>

          <div className={styles.apply}>
            <h2><FormattedMessage id="course_content.applyheader"/></h2>
            <p><FormattedMessage id="course_content.applynotif"/></p>
            <p><FormattedMessage id="course_content.applysubmit"/></p>
            <ul>
              <p><FormattedMessage id="apply.submit.proof"/></p>
              <p><FormattedMessage id="apply.submit.transcript"/></p>
              <p><FormattedMessage id="apply.submit.pay"/></p>

            </ul>

            <button><FormattedMessage id="apply.button"/></button>
            <p><FormattedMessage id="apply.learn"/></p>

            <h2><FormattedMessage id="course_content.intakes"/></h2>
            <p><FormattedMessage id="intakes"/></p>

            <h2><FormattedMessage id="course_content.priorlearning"/></h2>
            <p><FormattedMessage id="course_content.priorlearninginfo"/></p>

            <h2><FormattedMessage id="course_content.mycomm"/></h2>
            <p><FormattedMessage id="course_content.mycomminfo"/></p>
            <p><FormattedMessage id="course_content.mycomminfo2"/></p>
          </div>


        </div>



      </main>
    </>
  )
}
