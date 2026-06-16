export function HorizontalStrip() {
  const photos = [
    { src: "/__mockup/images/p_field_officers.jpg", category: "Supervision", title: "Field Supervisors", desc: "Uniformed officers on active duty across Indore", pos: "object-top" },
    { src: "/__mockup/images/p_security_team.jpg", category: "Security", title: "Security Team", desc: "Trained guards & bouncers for any venue", pos: "object-center" },
    { src: "/__mockup/images/p_lady_uniform.jpg", category: "Healthcare", title: "Hospital Staff", desc: "APS attendants in navy uniforms at hospitals", pos: "object-top" },
    { src: "/__mockup/images/p_sweep.jpg", category: "Housekeeping", title: "Cleaning Crew", desc: "Professional cleaning for all facility types", pos: "object-center" },
    { src: "/__mockup/images/p_team_group.jpg", category: "Manpower", title: "Trained Manpower", desc: "500+ staff certified and deployment-ready", pos: "object-top" },
  ];

  return (
    <div style={{ fontFamily: "Inter, sans-serif", background: "#0f1e3d", minHeight: "100vh", padding: "44px 48px", boxSizing: "border-box" }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 32 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
            <div style={{ width: 32, height: 2, background: "#d4a847" }} />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#d4a847" }}>Real People. Real Work.</span>
          </div>
          <h2 style={{ fontSize: 32, fontWeight: 900, color: "#ffffff", margin: 0, letterSpacing: "-0.02em" }}>Our People in Action</h2>
        </div>
        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", maxWidth: 220, textAlign: "right", margin: 0, lineHeight: 1.6 }}>
          500+ trained APS professionals deployed across Indore and MP
        </p>
      </div>

      {/* Horizontal equal strip */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 8, height: 380 }}>
        {photos.map((p) => (
          <div key={p.title} style={{ position: "relative", overflow: "hidden", borderRadius: 3 }}>
            <img
              src={p.src}
              alt={p.title}
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: p.pos, display: "block" }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15,30,61,0.92) 0%, rgba(15,30,61,0.35) 50%, transparent 75%)" }} />
            {/* Top category pill */}
            <div style={{ position: "absolute", top: 12, left: 10 }}>
              <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#d4a847", background: "rgba(15,30,61,0.65)", padding: "3px 7px", borderRadius: 2 }}>
                {p.category}
              </span>
            </div>
            {/* Bottom content */}
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "14px 12px" }}>
              <div style={{ fontSize: 13, fontWeight: 800, color: "#ffffff", marginBottom: 4, lineHeight: 1.2 }}>{p.title}</div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.55)", lineHeight: 1.4 }}>{p.desc}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Stats strip at bottom */}
      <div style={{ display: "flex", gap: 0, marginTop: 28, borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 20 }}>
        {[["500+", "Trained staff"], ["8", "Service types"], ["Indore, MP", "Primary area"], ["24/7", "Field supervision"], ["10+", "Years trusted"]].map(([val, lab], i) => (
          <div key={lab} style={{ flex: 1, paddingLeft: i > 0 ? 24 : 0, borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.08)" : "none" }}>
            <div style={{ fontSize: 18, fontWeight: 900, color: "#ffffff" }}>{val}</div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)" }}>{lab}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
