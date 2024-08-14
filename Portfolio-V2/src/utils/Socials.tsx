import styles from './Socials.module.scss';

function Socials() {
  const links = new Map();
  links.set("Facebook", "");
  links.set("Instagram", "");
  links.set("Github", "");
  links.set("Twitter", "");

  return (
    <div>
      {Array.from(links, ([key, value]: [key: string, value: string]) => 
            <a href={value} title={key} key={key} className={styles.social_links}>
              <i className={`fa-brands fa-square-${key.toLowerCase()}`}></i>
            </a>
      )}
    </div>
  );
}

export default Socials;
