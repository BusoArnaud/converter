import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'forceRateUsage'
})
export class ForceRateUsagePipe implements PipeTransform {

  transform(rate: number | null, forcedRate: number | null ): string {

    if (rate == null || forcedRate == null) {
      return '';
    }

    console.log(forcedRate);
    if (forcedRate <= 0) {
      return 'Forced rate must be > 0.'
    }

    const variation: number = (((forcedRate * 100)/rate) - 100);
    if (Math.abs(variation) < 2) {
      return 'Forced Rate is used.';
    } else {
      if (forcedRate) {
        return 'Variation with real rate is over 2%, forced rate can not be used.';
      } else {
        return '';
      }
    }
  }

}
