import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

interface ChatResponse {
  reply: string;
  options?: string[];
}

const SYSTEM_CONTEXT = `You are Star, the friendly AI assistant for Green Star Designs & Construction Pvt. Ltd., an architecture, civil engineering, and construction consultancy firm based in Bettiah, Bihar, India.

Key facts about the company:
- Founded and led by Board of Directors: Er. Wasi Reza (M.Tech Structural Engg, 10+ yrs, UD&HD registered, military projects, ASCE/CSCE/IAENG/DJFRVO member) and Er. Razida (B.Tech Civil Engg + MBA Finance, Civil 2D Planning, architectural drafting, finance consultancy).
- Core Engineering Team: Himanshu Poddar (M.Tech Structural Engg, 10+ yrs, planning/estimations/site execution, ASCE member) and Priyadarshi Kunal (B.Tech Civil Engg, SRM University, 10+ yrs, structural engineering for military & international projects, ASCE member).
- Advisory Board: Md. Rizwanullah (Civil, 17 yrs), Noorul Hoda (MEP, 34 yrs), Mouli Reddy (MEP, 3 yrs), Namrata Solanki (Finance & Marketing), Shahid Iqbal (Structural, 5+ yrs), Majid Iqbal (Structural, 2+ yrs), Nargis Praveen (Architect).
- 8 Services: Architectural Design, Structural Design, Interior Design, Exterior Design, Site Inspection, Project Supervision, BOQ & Estimation, Construction Consultancy.
- Contact: Phone/WhatsApp +91 7358331731, Email greenstardesignbth@gmail.com, Office: 05 Chhawani, Bettiah, Bihar 845438.
- Hours: Mon-Sat 9 AM to 6 PM (Sat till 2 PM), Sunday closed.
- Website: https://greenstardesign.in
- Serving all India with offices in Bettiah, Delhi, and Chennai.

Rules:
- Keep replies concise (2-4 sentences max) suitable for a chat widget.
- Be friendly and professional.
- Always end with a helpful suggestion relevant to the topic discussed.
- Do NOT make up information. If unsure, direct them to call +91 7358331731.`;

const mainOptions = [
  "Meet the Directors",
  "Core Engineering Team",
  "Board of Advisors",
  "Company Services",
  "Contact & Office Hours",
  "Quotation & Pricing",
];

function getLocalResponse(query: string): ChatResponse | null {
  if (query.match(/^(hi|hello|hey|hola|namaste|namaskar|sup|yo)$/i)) {
    return {
      reply: "Hello! Welcome to Green Star Designs & Construction. How can I help you today?",
      options: mainOptions,
    };
  }

  if (query.includes("wasi") || query.includes("reza")) {
    return {
      reply:
        "Er. Wasi Reza is a Board of Director with an M.Tech in Structural Engineering and 10+ years of experience. He is registered with UD&HD, experienced in Military projects, and a member of ASCE, CSCE, IAENG, and DJFRVO.",
      options: ["Er. Razida", "Core Engineering Team", "Main Menu"],
    };
  }

  if (query.includes("razida")) {
    return {
      reply:
        "Er. Razida is a Board of Director holding a B.Tech in Civil Engineering and an MBA in Finance. She specializes in Civil 2D Planning, architectural drafting, and finance consultancy as a Registered Engineer.",
      options: ["Er. Wasi Reza", "Core Engineering Team", "Main Menu"],
    };
  }

  if (query.includes("himanshu") || query.includes("poddar")) {
    return {
      reply:
        "Himanshu Poddar (M.Tech, Structural Engineering) has 10+ years experience in planning, estimations & site execution. On board since inception, he is an ASCE member with military project experience.",
      options: ["Priyadarshi Kunal", "Board of Directors", "Main Menu"],
    };
  }

  if (query.includes("kunal") || query.includes("priyadarshi")) {
    return {
      reply:
        "Priyadarshi Kunal holds a B.Tech in Civil Engineering from SRM University. An ASCE member with 10+ years experience, he specializes in structural engineering for military & international projects.",
      options: ["Himanshu Poddar", "Board of Directors", "Main Menu"],
    };
  }

  if (query.includes("directors") || query.includes("director")) {
    return {
      reply: "Our Board of Directors leads Green Star Designs with over a decade of technical and financial expertise:",
      options: ["Er. Wasi Reza", "Er. Razida", "Main Menu"],
    };
  }

  if (query.includes("core engineering") || query.includes("core team")) {
    return {
      reply: "Our Core Engineering team brings 10+ years of specialized structural execution experience:",
      options: ["Himanshu Poddar", "Priyadarshi Kunal", "Main Menu"],
    };
  }

  if (query.includes("advisors") || query.includes("advisor")) {
    return {
      reply:
        "Our Advisory Board includes experts across Structural, MEP, Construction, and Finance:\n" +
        "- Md. Rizwanullah (Civil, 17 yrs)\n" +
        "- Noorul Hoda (MEP, 34 yrs)\n" +
        "- Mouli Reddy (MEP, 3 yrs)\n" +
        "- Namrata Solanki (Finance & Marketing)\n" +
        "- Shahid Iqbal (Structural, 5+ yrs)\n" +
        "- Majid Iqbal (Structural, 2+ yrs)\n" +
        "- Nargis Praveen (Architect)",
      options: ["Company Services", "Contact & Office Hours", "Main Menu"],
    };
  }

  if (query.includes("service") || query.includes("offer")) {
    return {
      reply:
        "We provide 8 expert services:\n" +
        "1. Architectural Design\n2. Structural Design\n3. Interior Design\n4. Exterior Design\n" +
        "5. Site Inspection\n6. Project Supervision\n7. BOQ & Estimation\n8. Construction Consultancy",
      options: ["Quotation & Pricing", "Contact & Office Hours", "Main Menu"],
    };
  }

  if (query.includes("contact") || query.includes("phone") || query.includes("location")) {
    return {
      reply:
        "Call/WhatsApp: +91 7358331731\n" +
        "Email: greenstardesignbth@gmail.com\n" +
        "Office: Bettiah, Bihar (Serving all India)\n" +
        "Hours: Mon-Sat 9:00 AM to 6:00 PM (Sat till 2:00 PM)",
      options: ["Quotation & Pricing", "Company Services", "Main Menu"],
    };
  }

  if (query.includes("quote") || query.includes("pricing") || query.includes("cost")) {
    return {
      reply:
        "For a detailed quotation and project estimate, please contact us at +91 7358331731 or WhatsApp us directly at wa.me/917358331731!",
      options: ["Contact & Office Hours", "Company Services", "Main Menu"],
    };
  }

  return null;
}

function isOptionsQuery(query: string): boolean {
  const keywords = [
    "menu", "option", "main menu", "home", "start over", "back",
    "help", "what can you do", "topics", "choose",
  ];
  return keywords.some((k) => query.includes(k));
}

async function askGemini(message: string): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) throw new Error("No API key configured");

  const ai = new GoogleGenAI({ apiKey });

  const apiPromise = ai.models.generateContent({
    model: "gemini-3.6-flash",
    contents: [
      { role: "user", parts: [{ text: SYSTEM_CONTEXT }] },
      { role: "model", parts: [{ text: "Understood. I am Star, the AI assistant for Green Star Designs & Construction. I'll help visitors with information about our team, services, and contact details. How can I help?" }] },
      { role: "user", parts: [{ text: message }] },
    ],
    config: {
      temperature: 0.7,
      maxOutputTokens: 200,
    },
  });

  const timeoutPromise = new Promise<never>((_, reject) =>
    setTimeout(() => reject(new Error("Gemini timeout")), 5000)
  );

  const response = await Promise.race([apiPromise, timeoutPromise]);

  const text = response.text;
  if (!text) throw new Error("Empty response from Gemini");
  return text;
}

export async function POST(req: Request) {
  let message = "";

  try {
    const body = await req.json();
    message = body.message;

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { reply: "Please select or type a topic!", options: mainOptions },
        { status: 400 }
      );
    }

    const query = message.toLowerCase().trim();

    if (isOptionsQuery(query)) {
      return NextResponse.json<ChatResponse>({
        reply: "Hello! I'm Star. Please select an option below to learn more about Green Star Designs:",
        options: mainOptions,
      });
    }

    const localResponse = getLocalResponse(query);
    if (localResponse) {
      return NextResponse.json<ChatResponse>(localResponse);
    }

    const aiReply = await askGemini(message);
    return NextResponse.json<ChatResponse>({
      reply: aiReply,
      options: mainOptions,
    });
  } catch (error) {
    console.error("Chat API Error:", error);

    const query = (message || "").toLowerCase().trim();
    const localResponse = getLocalResponse(query);

    if (localResponse) {
      return NextResponse.json<ChatResponse>(localResponse);
    }

    return NextResponse.json<ChatResponse>({
      reply: "I'm having trouble connecting right now. Please choose an option below or call us at +91 7358331731.",
      options: mainOptions,
    });
  }
}
