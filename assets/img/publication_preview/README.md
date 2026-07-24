# Publication preview figures

Each publication on the `/publications/` page can show a representative figure on
the left, below its journal badge. The figure is wired to a paper through the
`preview={...}` field in `_bibliography/papers.bib`.

## How to designate a figure for a paper

1. Save your figure image in **this folder** (`assets/img/publication_preview/`).
2. Name the file exactly the same as the paper's bibtex key, with a `.jpg`
   extension. Every entry in `papers.bib` already has a matching
   `preview={<bibtexkey>.jpg}` line, so just dropping in the correctly-named file
   makes it appear — no editing needed.

Example: the paper whose entry starts with `@article{connolly2026nocancer,`
uses `preview={connolly2026nocancer.jpg}`, so its figure must be saved here as
`connolly2026nocancer.jpg`.

### If your image is a PNG (or other format)
Either save it as `.jpg`, or open `_bibliography/papers.bib` and change that one
paper's line, e.g. `preview={connolly2026nocancer.png}`.

### To remove a figure from a paper
Delete that paper's `preview={...}` line in `papers.bib` (that paper then shows
only its journal badge). A `preview` line pointing to a file that does not exist
here will show a broken image, so add the file or remove the line.

## Filename for each paper

| Save your figure as | Paper |
| --- | --- |
| `connolly2026nocancer.jpg` | No cancer left behind: photoacoustic tumor bed inspection (Computer Assisted Surgery, 2026) |
| `song2023arctoline.jpg` | Arc-to-line registration for US/PA image-guided robot-assisted prostatectomy (IJCARS, 2023) |
| `wu2023automatic.jpg` | Automatic search for photoacoustic marker using transrectal ultrasound robot (JBO, 2023) |
| `song2022synthetic.jpg` | Synthetic radial aperture focusing for economic transrectal ultrasound (Ultrasonics, 2022) |
| `song2022novel.jpg` | Novel design framework of synthetic radial aperture focusing (JCDE, 2022) |
| `song2022realtime.jpg` | Real-time intraoperative surgical guidance in da Vinci robot (IEEE RA-L, 2022) |
| `bae2020analysis.jpg` | Time and phase delay resolutions in ultrasound baseband I/Q beamformers (IEEE TBME, 2020) |
| `song2025remote.jpg` | Remote photoacoustic stimulation of retinal ganglion cells (ARVO, 2025) |
| `song2025grating.jpg` | Grating lobe suppression using synthetic sparse aperture focusing (UITC, 2025) |
| `patterson2024performance.jpg` | Polymer matrix nanocomposite as photoacoustic transmitter (IEEE NMDC, 2024) |
| `patterson2024synthesis.jpg` | Biocompatible polymer matrix nanocomposite for photoacoustics (IEEE NANO, 2024) |
| `song2024towards.jpg` | Towards visual function restoration through photoacoustic stimulation (ARVO, 2024) |
| `song2023spectral.jpg` | Spectral Doppler estimation in laser ultrasound (IEEE IUS, 2023) |
| `spicer2023photoacoustic.jpg` | Photoacoustic emission efficiency of polymer nanocomposites (IEEE NMDC, 2023) |
| `moradi2023towards.jpg` | Photoacoustic prostate imaging using CW laser excitation (SPIE, 2023) |
| `song2022iros.jpg` | Real-time surgical guidance in da Vinci robot (IEEE IROS, 2022) |
| `song2022radial.jpg` | Radial synthetic aperture focusing for low-cost 3D TRUS (IEEE IUS, 2022) |
| `song2022uitc.jpg` | Analysis on radial synthetic aperture focusing for 3D TRUS (UITC, 2022) |
| `song2022functional.jpg` | Functional guidance of nerve graft surgery, dual-modal PA/fluorescence (SPIE, 2022) |
| `song2021optimization.jpg` | Optimization of volumetric TRUS using radial synthetic aperture focusing (UITC, 2021) |
| `song2020volumetric.jpg` | Volumetric TRUS robust to scanning-angle disorientation (IEEE IUS, 2020) |
| `song2020differential.jpg` | Differential ultrasound neuromodulatory responses of rat cortical neurons (IEEE IUS, 2020) |
| `jang2018determination.jpg` | Delay resolution in baseband I/Q beamformer (IEEE IUS, 2018) |
| `song2017new.jpg` | New synthetic aperture technique using plane waves (IEEE EMBC, 2017) |
| `kim2016ultrasound.jpg` | Ultrasound tissue harmonic imaging using nonlinear chirp coded excitation (IEEE IUS, 2016) |

## Recommended image specs
Roughly square or landscape, ~400–600 px wide is plenty (thumbnails render at
~200 px). Keep files small for fast page loads.
