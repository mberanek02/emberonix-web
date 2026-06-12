import { redirect } from 'next/navigation';

/**
 * The variant comparison preview lived here while we were choosing between
 * the two Stitch home mockups. Variant 2 (DETERMINISTIC ENGINEERING. /
 * AUTONOMOUS DESIGN.) is now the canonical home. This route is preserved as
 * a redirect so any links shared during review still resolve.
 *
 * Safe to delete the entire `rebrand-preview/` folder.
 */
export default function RebrandPreview() {
  redirect('/');
}
