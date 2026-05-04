import { useEffect } from "react";

export default function App() {

  useEffect(() => {
    (function (w, d, x, id) {
      const s = d.createElement("script");
      s.src = "https://lexaws222-demo.my.connect.aws/connectwidget/static/amazon-connect-chat-interface-client.js";
      s.async = true;
      s.id = id;
      d.getElementsByTagName("head")[0].appendChild(s);
      w[x] = w[x] || function () { (w[x].ac = w[x].ac || []).push(arguments); };
    })(window, document, "amazon_connect", "a6018f13-345c-4fa8-9ef1-601199d6559f");

    window.amazon_connect("styles", {
      iconType: "CHAT_VOICE",
      openChat: { color: "#ffffff", backgroundColor: "#123456" },
      closeChat: { color: "#ffffff", backgroundColor: "#123456" },
    });
    window.amazon_connect("snippetId", "QVFJREFIaDRobWZ4TDRrQys5SXJsU0RsT2NjaHpDOEQvN3ZqSEZkQWdhY1I3SUhoUXdGRXVrRkZHakFHZm5jVFViODQ2aVFmQUFBQWJqQnNCZ2txaGtpRzl3MEJCd2FnWHpCZEFnRUFNRmdHQ1NxR1NJYjNEUUVIQVRBZUJnbGdoa2dCWlFNRUFTNHdFUVFNMTRmdGFENlZBRXg3RDVHeEFnRVFnQ3RidjQ4YlVmV054OEorRTZ5ZjhLTHU3cnQwdHVjMnlWM0tXZFpYbE5NNHpibjYwOGZlYmVzNnZaNXk6OjIvTi9UdkNMVHJnMTZTWEtLU1N2QjZMWWdGZHRqbkJUVHlDaWhwQjVnTis1UXR0YUNyWld4VFVSbmhoR0Z0YWw0ZVp1VExxa2R4aHRHdWMzZEZDb1ljNm1wSTNEcEV6ckZmb3o4cmNWeUlUZkNCUExCMEhwTE5DMEl2RWd1NWlRL1BwWDd4N3c5Ui95eHg2bnA5am5JL3lKeVNidSt4az0=");
    window.amazon_connect("supportedMessagingContentTypes", [
      "text/plain",
      "text/markdown",
      "application/vnd.amazonaws.connect.message.interactive",
      "application/vnd.amazonaws.connect.message.interactive.response",
    ]);
  }, []);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#f9f9f9", minHeight: "100vh" }}>

      {/* Navbar */}
      <div style={{ background: "#123456", color: "white", padding: "14px 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <h1 style={{ fontSize: "18px", fontWeight: "600" }}>Accor Hotels</h1>
        <nav style={{ display: "flex", gap: "24px", fontSize: "14px" }}>
          <span style={{ cursor: "pointer", color: "#ccc" }}>Home</span>
          <span style={{ cursor: "pointer", color: "#ccc" }}>My Booking</span>
          <span style={{ cursor: "pointer", color: "white", fontWeight: "600" }}>Support</span>
        </nav>
      </div>

      {/* Hero */}
      <div style={{ background: "#123456", color: "white", padding: "60px 32px", textAlign: "center" }}>
        <h2 style={{ fontSize: "32px", fontWeight: "700", marginBottom: "12px" }}>How can we help you?</h2>
        <p style={{ fontSize: "16px", color: "#aac4e8", maxWidth: "500px", margin: "0 auto" }}>
          Our support team is available 24/7. Chat with us, request a callback, or browse common topics below.
        </p>
      </div>

      {/* Support options */}
      <div style={{ maxWidth: "800px", margin: "40px auto", padding: "0 24px" }}>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center", marginBottom: "40px" }}>
          {[
            { icon: "💬", title: "Live Chat", desc: "Chat with an agent now" },
            { icon: "📞", title: "Request Callback", desc: "We'll call you back shortly" },
            { icon: "📧", title: "Email Us", desc: "Get a response within 24hrs" },
          ].map((item) => (
            <div key={item.title} style={{ background: "white", border: "1px solid #ddd", borderRadius: "8px", padding: "24px", textAlign: "center", flex: "1", minWidth: "180px", cursor: "pointer" }}>
              <div style={{ fontSize: "28px", marginBottom: "8px" }}>{item.icon}</div>
              <div style={{ fontWeight: "600", fontSize: "15px", marginBottom: "4px" }}>{item.title}</div>
              <div style={{ fontSize: "13px", color: "#888" }}>{item.desc}</div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <h3 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "16px", color: "#123456" }}>Common Questions</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {[
            "How do I modify or cancel my reservation?",
            "What is your cancellation policy?",
            "How do I join the loyalty program?",
            "I was charged incorrectly — what do I do?",
            "How do I request a late checkout?",
          ].map((q) => (
            <div key={q} style={{ background: "white", border: "1px solid #ddd", borderRadius: "6px", padding: "14px 18px", fontSize: "14px", color: "#333", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              {q}
              <span style={{ color: "#888", fontSize: "18px" }}>›</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{ textAlign: "center", padding: "24px", fontSize: "12px", color: "#aaa", borderTop: "1px solid #eee", marginTop: "40px" }}>
        © 2026 Accor Hotels · All rights reserved
      </div>

    </div>
  );
}