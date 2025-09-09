import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import styles from './HrOneWebpart.module.scss';
import { IHrOneWebpartProps } from './IHrOneWebpartProps';

type Tile = {
  title: string;
  description: string;
  href?: string;
  bg?: string;
};

const tiles: Tile[] = [
  { title: 'Our DNA', description: 'Values that drive our journey.', bg: '#D9F0EA' },
  { title: 'Newsroom', description: 'Latest updates and news.', bg: '#FCE8E3' },
  { title: 'Contact Us', description: 'Get in touch with HROne.', bg: '#FFF1C6' },
  { title: 'Partners', description: 'Partner with HROne.', bg: '#EEDCFA' },
  { title: 'Life@HROne', description: 'Culture & careers.', bg: '#E7F1EC' },
  { title: 'Leadership', description: 'Meet our leadership team.', bg: '#F7D4D2' }
];

const HrOneWebpart: React.FC<IHrOneWebpartProps> = (props: IHrOneWebpartProps) => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <React.Fragment>
      <div className={styles.wrapper} ref={wrapperRef}>
        <div className={styles.bar}>
          <div className={styles.barInner}>
            <div className={styles.brand}>
              <div className={styles.logo}>HR</div>
              <div className={styles.brandText}>One</div>
            </div>

            <ul className={styles.menu} role="menubar" aria-label="Main navigation">
              <li
                className={styles.menuItem}
                onMouseEnter={() => setOpen(v => !v)}
                onBlur={() => setOpen(false)}
                aria-haspopup="true"
                aria-expanded={open}
                role="menuitem"
                tabIndex={0}
                onKeyDown={(e: React.KeyboardEvent) => { if (e.key === 'Enter' || e.key === ' ') setOpen(v => !v); }}
              >
                About HROne <span className={styles.caret}>▾</span>
              </li>

              <li className={styles.menuItem} role="none">
                <a role="menuitem" aria-label="Products" href="/products" className={styles.menuLink}>Products</a>
              </li>

              <li className={styles.menuItem} role="none">
                <a role="menuitem" aria-label="Pricing" href="/pricing" className={styles.menuLink}>Pricing</a>
              </li>

              <li className={styles.menuItem} role="none">
                <a role="menuitem" aria-label="Case Study" href="/case-study" className={styles.menuLink}>Case Study</a>
              </li>
              
              <li className={styles.menuItem} role="none">
                <a role="menuitem" aria-label="HR Resources" href="/hr-resources" className={styles.menuLink}>HR Resources</a>
              </li>
            </ul>

            {/* Added spacer to push buttons to the right, resolving the error */}
            <div className={styles.spacer}></div>

            <a className={styles.btnOutline} href="#" role="button">Login</a>
            <a className={styles.btnPrimary} href="#" role="button">Get Free Trial</a>
          </div>
        </div>
      </div>

      {open && (
        <div className={styles.dropdown} role="menu" aria-label="About HROne">
          <div className={styles.tiles}>
            {tiles.map((t, i) => (
              <a
                key={t.title + i}
                className={styles.tile}
                href={t.href || '#'}
                style={{ backgroundColor: t.bg }}
              >
                <h4>{t.title}</h4>
                <p>{t.description}</p>
              </a>
            ))}
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default HrOneWebpart;