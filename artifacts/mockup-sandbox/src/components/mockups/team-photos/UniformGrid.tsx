export function UniformGrid() {
  const photos = [
    { src: "/__mockup/images/p_security_team.jpg", service: "Security", label: "Security Team", pos: "object-center" },
    { src: "/__mockup/images/p_field_officers.jpg", service: "Supervisors", label: "Field Officers", pos: "object-top" },
    { src: "/__mockup/images/p_lady_uniform.jpg", service: "Healthcare", label: "Hospital Staff", pos: "object-top" },
    { src: "/__mockup/images/p_sweep.jpg", service: "Housekeeping", label: "Cleaning Crew", pos: "object-center" },
    { src: "/__mockup/images/p_team_group.jpg", service: "Manpower", label: "Trained Manpower", pos: "object-top" },
    { src: "/__mockup/images/p_cafe_clean.jpg", service: "Facility Mgmt", label: "Facility Team", pos: "object-center" },
  ];

  return (
    <div style={{ fontFamily: "Inter, sans-serif", background: "#ffffff", minHeight: "100vh", padding: "40px 48px" }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 28 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
            <div style={{ width: 32, height: 2, background: "#b07d2a" }} />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#b07d2a" }}>Real People. Real Work.</span>
          </div>
          <h2 style={{ fontSize: 32, fontWeight: 900, color: "#0f1e3d", margin: 0, letterSpacing: "-0.02em" }}>Our People in Action</h2>
        </div>
        <p style={{ fontSize: 13, color: "#6b7280", maxWidth: 220, textAlign: "right", margin: 0, lineHeight: 1.6 }}>
          500+ trained APS staff deployed across Indore and MP
        </p>
      </div>

      {/* 3×2 uniform grid */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 3 }}>
        {photos.map((p) => (
          <div key={p.label} style={{ position: "relative", overflow: "hidden", height: 220 }}>
            <img
              src={p.src}
              alt={p.label}
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: p.pos, display: "block", transition: "transform 0.4s" }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15,30,61,0.85) 0%, rgba(15,30,61,0.2) 45%, transparent 70%)" }} />
            {/* Service tag */}
            <div style={{ position: "absolute", top: 12, left: 12 }}>
              <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", background: "rgba(176,125,42,0.9)", color: "#fff", padding: "3px 8px", borderRadius: 2 }}>
                {p.service}
              </span>
            </div>
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "12px 14px" }}>
              <span style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>{p.label}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Caption */}
      <p style={{ fontSize: 12, color: "#9ca3af", textAlign: "center", marginTop: 16, margin: "16px 0 0" }}>
        APS staff deployed at factories, hospitals, malls and offices across Indore, Madhya Pradesh
      </p>
    </div>
  );
}
