// DeerWall Design System — Shared sidebar
// Pass `current` to highlight active page.

function DSSidebar({ current = 'index' }) {
  const [open, setOpen] = React.useState(false);
  const [topbarHost, setTopbarHost] = React.useState(null);

  React.useEffect(() => {
    let host = document.getElementById('ds-topbar-host');
    if (!host) {
      host = document.createElement('div');
      host.id = 'ds-topbar-host';
      host.style.display = 'contents';
      document.body.insertBefore(host, document.body.firstChild);
    }
    setTopbarHost(host);
  }, []);

  React.useEffect(() => {
    function onKey(e) { if (e.key === 'Escape') setOpen(false); }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const sections = [
    {
      label: 'Brand',
      items: [
        { id: 'index',     num: '00', label: 'Overview',   href: 'index.html' },
        { id: 'strategy',  num: '01', label: 'Strategy',   href: 'strategy.html' },
        { id: 'logo',      num: '02', label: 'Logo',       href: 'logo.html' },
      ],
    },
    {
      label: 'Foundations',
      items: [
        { id: 'color',       num: '03', label: 'Color',        href: 'color.html' },
        { id: 'typography',  num: '04', label: 'Typography',   href: 'typography.html' },
        { id: 'iconography', num: '05', label: 'Iconography',  href: 'iconography.html' },
        { id: 'imagery',     num: '06', label: 'Imagery',      href: 'imagery.html' },
      ],
    },
    {
      label: 'Components',
      items: [
        { id: 'components', num: '07', label: 'UI Library',  href: 'components.html' },
      ],
    },
    {
      label: 'Templates',
      items: [
        { id: 'packaging',   num: '08', label: 'Packaging',    href: 'packaging.html' },
        { id: 'collateral',  num: '09', label: 'Collateral',   href: 'collateral.html' },
        { id: 'social',      num: '10', label: 'Social & web', href: 'social.html' },
        { id: 'presentation',num: '11', label: 'Presentation', href: 'presentation.html' },
      ],
    },
  ];

  return (
    <React.Fragment>
      {topbarHost && ReactDOM.createPortal(
        <div className="ds-topbar">
          <a href="index.html" className="brand" style={{ textDecoration: 'none', color: 'inherit' }}>
            <img src="assets/dw-white.png" alt="DeerWall"/>
            <span className="label">Brand&nbsp;Book</span>
          </a>
          <button className="ds-burger" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(o => !o)}>
            {open
              ? <svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg>
              : <svg viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></svg>}
          </button>
        </div>,
        topbarHost
      )}

      <div className={`ds-scrim ${open ? 'open' : ''}`} onClick={() => setOpen(false)} aria-hidden="true"/>

      <aside className={`ds-sidebar ${open ? 'open' : ''}`}>
        <div className="ds-sidebar-brand">
          <img src="assets/dw-white.png" alt="DeerWall"/>
          <span className="label">Brand&nbsp;Book</span>
        </div>

        {sections.map(sec => (
          <div className="ds-nav-section" key={sec.label}>
            <h4>{sec.label}</h4>
            {sec.items.map(it => (
              <a
                key={it.id}
                href={it.href}
                className={`ds-nav-link ${current === it.id ? 'active' : ''}`}
                onClick={() => setOpen(false)}
              >
                <span>{it.label}</span>
                <span className="num">{it.num}</span>
              </a>
            ))}
          </div>
        ))}

        <div style={{ marginTop: 32, paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <div className="ds-mono" style={{ color: 'rgba(255,255,255,0.35)', fontSize: 10 }}>v1.0 · 2026</div>
          <div className="ds-mono" style={{ color: 'rgba(255,255,255,0.35)', fontSize: 10, marginTop: 4 }}>DeerWall · Brand Book</div>
        </div>
      </aside>
    </React.Fragment>
  );
}

function DSFooter() {
  return (
    <footer className="ds-footer">
      <span>DeerWall · Brand Book v1.0</span>
      <span className="acc">Natural · Confident · Effective</span>
      <span>© 2026 DeerWall</span>
    </footer>
  );
}

Object.assign(window, { DSSidebar, DSFooter });
