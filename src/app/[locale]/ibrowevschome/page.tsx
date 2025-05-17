import ComparisonLayout from '@/components/ComparisonLayout'

export default function ChromeComparison() {
  const comparisonPoints = [
    {
      title: 'ความเป็นส่วนตัว',
      ibrowePoint: 'iBrowe มีระบบป้องกันการติดตามและบล็อกโฆษณาอัตโนมัติ ไม่มีการเก็บข้อมูลส่วนตัวของผู้ใช้',
      competitorPoint: 'Chrome เก็บข้อมูลการใช้งานและประวัติการท่องเว็บเพื่อส่งโฆษณาที่ตรงกลุ่มเป้าหมาย',
    },
    {
      title: 'ความเร็ว',
      ibrowePoint: 'เร็วกว่าด้วยการบล็อกโฆษณาและตัวติดตาม ทำให้โหลดหน้าเว็บได้เร็วขึ้นถึง 3 เท่า',
      competitorPoint: 'ความเร็วในการโหลดหน้าเว็บลดลงเนื่องจากต้องโหลดโฆษณาและตัวติดตามจำนวนมาก',
    },
    {
      title: 'การใช้ทรัพยากร',
      ibrowePoint: 'ใช้ RAM และ CPU น้อยกว่าเนื่องจากไม่ต้องประมวลผลโฆษณาและตัวติดตาม',
      competitorPoint: 'ใช้ทรัพยากรระบบมากกว่าเนื่องจากต้องประมวลผลโฆษณาและตัวติดตาม',
    },
    {
      title: 'ความปลอดภัย',
      ibrowePoint: 'มีระบบป้องกันมัลแวร์และการติดตามขั้นสูง พร้อมการเข้ารหัสข้อมูลที่ปลอดภัย',
      competitorPoint: 'มีระบบป้องกันมัลแวร์พื้นฐาน แต่ยังอนุญาตให้มีการติดตามจากบุคคลที่สาม',
    },
  ]

  return (
    <ComparisonLayout
      title="iBrowe vs Chrome"
      description="เปรียบเทียบให้เห็นชัดๆ ว่าทำไม iBrowe ถึงดีกว่า Chrome ในทุกด้าน ทั้งความเป็นส่วนตัว ความเร็ว และความปลอดภัย"
      competitor="Chrome"
      competitorLogo="/images/chrome-logo.png"
      comparisonPoints={comparisonPoints}
    />
  )
} 