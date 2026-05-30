import re

with open("src/app/services/define-your-roadmap/maturity-assessment/page.js", "r") as f:
    content = f.read()

# Extract blocks
title_block = re.search(r'(<div className="rounded-bl-\[3rem\].*?</div>\s*)(?=</?motion\.div)', content, re.DOTALL).group(1)
graph_block = re.search(r'(<motion\.div\s+initial=\{\{ opacity: 0, y: 20 \}\}.*?Baseline Disconnect Telemetry.*?</motion\.div>)', content, re.DOTALL).group(1)
image_block = re.search(r'(<motion\.div\s+initial=\{\{ opacity: 0, y: 40 \}\}.*?Premium Asymmetric Editorial Image Block.*?</motion\.div>)', content, re.DOTALL).group(1)

prob1 = re.search(r'(<motion\.div[^>]*>.*?01.*?</motion\.div>)', content, re.DOTALL).group(1)
prob2 = re.search(r'(<motion\.div[^>]*>.*?02.*?</motion\.div>)', content, re.DOTALL).group(1)
prob3 = re.search(r'(<motion\.div[^>]*>.*?03.*?</motion\.div>)', content, re.DOTALL).group(1)

# Clean up classes for problem cards to fit a 3-col grid (remove self-end, w-full, large mt, etc)
def clean_card(card_html, delay=0):
    # Add a delay for staggered entrance
    card_html = re.sub(r'variants=\{slideAndPop\}', f'variants={{slideAndPop}}', card_html)
    # Remove some specific width/margin classes that were meant for vertical stack
    card_html = re.sub(r'w-full self-end ', '', card_html)
    card_html = re.sub(r'w-full ', '', card_html)
    card_html = re.sub(r'md:w-\[[^\]]+\] ', '', card_html)
    card_html = re.sub(r'lg:w-\[[^\]]+\] ', '', card_html)
    card_html = re.sub(r'sm:-mt-\d+ ', '', card_html)
    card_html = re.sub(r'lg:-mt-\d+ ', '', card_html)
    card_html = re.sub(r'mt-6 ', '', card_html)
    # Make them fully round or less wildly asymmetrical if we want, but let's keep the brutalist borders
    return card_html

prob1_clean = clean_card(prob1)
prob2_clean = clean_card(prob2)
prob3_clean = clean_card(prob3)

# Stagger the cards in grid
prob2_clean = prob2_clean.replace('className="group', 'className="group md:mt-12')
prob3_clean = prob3_clean.replace('className="group', 'className="group md:mt-24')

new_sections = f"""
      {{/* Section 1: The Reality Check (Intro & Telemetry) */}}
      <section className="relative z-30 bg-background pb-16 pt-10 lg:pb-24">
        <div className="container mx-auto max-w-[1400px] px-6">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
            {{/* Left Column: Title and Image */}}
            <div className="flex flex-col gap-8 md:gap-12">
{title_block}
{image_block}
            </div>
            
            {{/* Right Column: Telemetry Graph */}}
            <div className="flex flex-col gap-8 md:gap-12 lg:pt-16">
{graph_block}
            </div>
          </div>
        </div>
      </section>

      {{/* Section 2: The Three Problem Scenarios */}}
      <section className="relative z-30 bg-muted/10 pb-24 pt-16 lg:pb-32 lg:pt-24 border-t-8 border-foreground">
        <div className="container mx-auto max-w-[1400px] px-6">
          <div className="mb-16 text-center max-w-3xl mx-auto">
             <h2 className="text-3xl font-black uppercase tracking-tighter text-foreground sm:text-4xl md:text-[3.5rem] leading-none">
                Common Symptoms We See
             </h2>
             <div className="mt-6 h-1.5 w-24 bg-forest mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12 items-start">
{prob1_clean}
{prob2_clean}
{prob3_clean}
          </div>
        </div>
      </section>
"""

# Replace in content
start_idx = content.find('{/* The Problem Section - Asymmetric, Watermarked Overlaps */}')
end_idx = content.find('{/* Deliverables Section - Zero Gap Interlocking Grid (Hardcore Blueprint Style) */}')

if start_idx != -1 and end_idx != -1:
    new_content = content[:start_idx] + new_sections + content[end_idx:]
    with open("src/app/services/define-your-roadmap/maturity-assessment/page.js", "w") as f:
        f.write(new_content)
    print("Successfully replaced sections!")
else:
    print("Could not find start/end markers")
