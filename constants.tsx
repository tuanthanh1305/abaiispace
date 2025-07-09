
import type { Project } from './types';
import { DocumentMagnifyingGlassIcon, CubeTransparentIcon, MicrophoneIcon, ScaleIcon } from './components/icons';

export const PROJECTS: Project[] = [
  {
    id: 'ai-assistant',
    title: 'Trợ lý AI cho Cán bộ, Công chức',
    description: 'Tối ưu hóa quy trình làm việc, phân tích văn bản, và hỗ trợ ra quyết định nhanh chóng với trợ lý ảo thông minh được thiết kế riêng cho cán bộ, công chức.',
    url: 'https://cbcc.abaii.space',
    Icon: DocumentMagnifyingGlassIcon,
  },
  {
    id: 'blockchain-labs',
    title: 'ABAII Blockchain Labs',
    description: 'Khám phá thế giới phức tạp của blockchain một cách trực quan và an toàn. Nền tảng cung cấp kiến thức từ cơ bản đến nâng cao, cùng các demo tương tác.',
    url: 'https://blockchain.abaii.space',
    Icon: CubeTransparentIcon,
  },
  {
    id: 'audio-transcription',
    title: 'Tốc ký âm thanh',
    description: 'Chuyển lời nói thành văn bản dễ dàng. Dù là lời nói bằng tiếng Anh, nội dung vẫn được chuyển sang tiếng Việt. Mọi lời nói được chuyển đổi thành ghi chép rõ ràng, chính xác và dễ hiểu.',
    url: 'https://tockyamthanh.abaii.space',
    Icon: MicrophoneIcon,
  },
  {
    id: 'ai-law-lookup',
    title: 'AI Tra cứu luật',
    description: 'Tra cứu, phân tích và giải đáp các vấn đề pháp lý một cách nhanh chóng và chính xác với trợ lý AI. Hỗ trợ người dùng hiểu rõ hơn về luật pháp Việt Nam.',
    url: 'https://aitracuuluat.vn/',
    Icon: ScaleIcon,
  }
];