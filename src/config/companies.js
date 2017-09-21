import theodoukConfig from './forms/theodouk'
import theodofrConfig from './forms/theodofr'
import sicaraConfig from './forms/sicara'
import fastitConfig from './forms/fastit'
import bamConfig from './forms/bam'

export default {
  THEODO_UK: { name: 'Theodo UK', path: 'theodouk', config: theodoukConfig },
  THEODO_FR: { name: 'Theodo', path: 'theodo', config: theodofrConfig },
  FASTIT: { name: 'FASTIT', path: 'fastit', config: fastitConfig },
  BAM: { name: 'BAM', path: 'bam', config: bamConfig },
  SICARA: { name: 'Sicara', path: 'sicara', config: sicaraConfig }
}
