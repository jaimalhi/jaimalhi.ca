import { readFile } from 'node:fs/promises';

const packageJson = JSON.parse(await readFile(new URL('../package.json', import.meta.url), 'utf8'));
const sections = ['dependencies', 'devDependencies', 'optionalDependencies', 'peerDependencies'];
const floating = /[~^*<>=|]|\s/;
const invalid = [];

for (const section of sections) {
	for (const [name, spec] of Object.entries(packageJson[section] ?? {})) {
		if (typeof spec !== 'string' || floating.test(spec) || !/^\d+\.\d+\.\d+$/.test(spec)) {
			invalid.push(`${section}.${name}: ${spec}`);
		}
	}
}

for (const [name, spec] of Object.entries(packageJson.overrides ?? {})) {
	if (typeof spec !== 'string' || floating.test(spec) || !/^\d+\.\d+\.\d+$/.test(spec)) {
		invalid.push(`overrides.${name}: ${spec}`);
	}
}

if (invalid.length > 0) {
	console.error('Dependency specifications must be exact X.Y.Z versions:');
	console.error(invalid.join('\n'));
	process.exit(1);
}

console.log('All declared dependency specifications are exact versions.');
