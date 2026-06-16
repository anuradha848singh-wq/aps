export function BentoGrid() {
  const photos = [
    { src: "/__mockup/images/p_field_officers.jpg", label: "Field Supervisors", pos: "object-top" },
    { src: "/__mockup/images/p_security_team.jpg", label: "Security Team", pos: "object-center" },
    { src: "/__mockup/images/p_lady_uniform.jpg", label: "Hospital Staff", pos: "object-top" },
    { src: "/__mockup/images/p_sweep.jpg", label: "Housekeeping", pos: "object-center" },
    { src: "/__mockup/images/p_team_group.jpg", label: "Trained Manpower", pos: "object-top" },
  ];

  return (
    <div style={{ fontFamily: "Inter, sans-serif", background: "#f8f6f1", minHeight: "100vh", padding: "40px 48px" }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 32 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
            <div style={{ width: 32, height: 2, background: "#b07d2a" }} />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#b07d2a" }}>Real People. Real Work.</span>
          </div>
          <h2 style={{ fontSize: 32, fontWeight: 900, color: "#0f1e3d", margin: 0, letterSpacing: "-0.02em" }}>Our People in Action</h2>
        </div>
        <p style={{ fontSize: 13, color: "#6b7280", maxWidth: 240, textAlign: "right", margin: 0, lineHeight: 1.6 }}>
          500+ trained APS professionals across Indore and MP
        </p>
      </div>

      {/* Bento grid */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gridTemplateRows: "240px 240px", gap: 12 }}>
        {/* Large left — spans 2 rows */}
        <div style={{ gridRow: "1 / 3", position: "relative", overflow: "hidden", borderRadius: 4 }}>
          <img src={photos[0].src} alt={photos[0].label} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 50%)" }} />
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px 18px" }}>
            <span style={{ display: "block", fontSize: 10, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#d4a847", marginBottom: 4 }}>Field</span>
            <span style={{ fontSize: 16, fontWeight: 800, color: "#fff" }}>{photos[0].label}</span>
          </div>
        </div>

        {/* Top center — wide */}
        <div style={{ gridColumn: "2 / 4", position: "relative", overflow: "hidden", borderRadius: 4 }}>
          <img src={photos[1].src} alt={photos[1].label} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 50%)" }} />
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "16px 18px" }}>
            <span style={{ display: "block", fontSize: 10, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#d4a847", marginBottom: 4 }}>Security</span>
            <span style={{ fontSize: 16, fontWeight: 800, color: "#fff" }}>{photos[1].label}</span>
          </div>
        </div>

        {/* Bottom center */}
        <div style={{ position: "relative", overflow: "hidden", borderRadius: 4 }}>
          <img src={photos[2].src} alt={photos[2].label} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 50%)" }} />
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "14px 16px" }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: "#fff" }}>{photos[2].label}</span>
          </div>
        </div>

        {/* Bottom right */}
        <div style={{ position: "relative", overflow: "hidden", borderRadius: 4 }}>
          <img src={photos[4].src} alt={photos[4].label} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 50%)" }} />
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "14px 16px" }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: "#fff" }}>{photos[4].label}</span>
          </div>
        </div>
      </div>

      {/* Bottom stats */}
      <div style={{ display: "flex", gap: 40, marginTop: 24, paddingTop: 20, borderTop: "1px solid #e5e0d5" }}>
        {[["500+", "Trained Staff"], ["8", "Service Types"], ["Indore, MP", "Service Area"], ["24/7", "Supervision"]].map(([val, lab]) => (
          <div key={lab}>
            <div style={{ fontSize: 20, fontWeight: 900, color: "#0f1e3d" }}>{val}</div>
            <div style={{ fontSize: 11, color: "#9ca3af" }}>{lab}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
