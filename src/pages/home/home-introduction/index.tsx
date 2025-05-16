import SmallTitle from "@/components/small-title";
import { StyledContent, StyledWrapper } from "./styles";

export default function HomeIntroduction() {
  return (
    <StyledWrapper>
      <StyledContent>
        <SmallTitle title="معرفی" />

        <div data-lined>
          {[
            "محمد صالحی",
            "توسعه‌دهنده React",
            "ساکن نجف‌آباد",
            "متولد ۱۳۷۵",
            "لیسانس کامپیوتر(دانشگاه صنعتی اصفهان)",
          ].map((text) => (
            <div key={text}>{text}</div>
          ))}
        </div>

        <div data-desc>
          حدود ۹ ساله یادگیری برنامه‌نویسی رو شروع کردم و از ۶ سال پیش به صورت
          متمرکز روی JavaScript و React کار میکردم.&nbsp;به صورت حضوری و بیشتر
          به صورت دورکاری سابقه کار دارم.
        </div>
      </StyledContent>

      <div />
    </StyledWrapper>
  );
}
