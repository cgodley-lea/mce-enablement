// Creates part folders, _category_.json files and lesson stubs from src/data/course.ts.
// Never overwrites an existing lesson file. Run with: npm run scaffold
import {existsSync, mkdirSync, writeFileSync} from 'node:fs';
import {join} from 'node:path';
import {course} from '../src/data/course.ts';

const docs = join(import.meta.dirname, '..', 'docs');
let created = 0;

for (const part of course) {
  const dir = join(docs, part.slug);
  mkdirSync(dir, {recursive: true});
  writeFileSync(
    join(dir, '_category_.json'),
    JSON.stringify(
      {label: `Part ${part.number}: ${part.title}`, position: part.number + 1, collapsible: true, collapsed: part.number !== 0},
      null,
      2,
    ) + '\n',
  );

  part.lessons.forEach((lesson, i) => {
    const file = join(dir, `${lesson.slug}.md`);
    if (existsSync(file)) return;
    const hours = Number(lesson.hours.toFixed(2));
    const lab = lesson.lab === 'None' ? 'No lab for this lesson.' : lesson.lab === 'Walkthrough' ? 'Walkthrough with screenshots (not built in the BU).' : lesson.lab;
    writeFileSync(
      file,
      `---
sidebar_position: ${i + 1}
title: "${lesson.title}"
description: "Part ${part.number}: ${part.title}. About ${hours} hours."
---

:::info[Lesson in progress]
This lesson is planned but not written yet. Its lab and its MCN and MCAE comparisons are below.
:::

## Lab

${lab.endsWith(".") ? lab : lab + "."}

<Compare mcn="${lesson.mcn}." mcae="${lesson.mcae}." />
`,
    );
    created++;
  });
}

console.log(`Scaffold complete. ${created} new lesson stub(s) created.`);
