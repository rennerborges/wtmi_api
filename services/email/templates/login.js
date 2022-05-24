/* eslint-disable no-tabs */
import { MomentSpeed } from '../../../src/util/date';

export default function getTemplateRegisterUser({
  username,
  companyName,
  date,
}) {
  const year = MomentSpeed().format('YYYY');

  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
	<html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
	
	<head>
			<meta charset="UTF-8">
			<meta content="width=device-width, initial-scale=1" name="viewport">
			<meta name="x-apple-disable-message-reformatting">
			<meta http-equiv="X-UA-Compatible" content="IE=edge">
			<meta content="telephone=no" name="format-detection">
			<title></title>
			<!--[if (mso 16)]>
			<style type="text/css">
			a {text-decoration: none;}
			</style>
			<![endif]-->
			<!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]-->
			<!--[if gte mso 9]>
	<xml>
			<o:OfficeDocumentSettings>
			<o:AllowPNG></o:AllowPNG>
			<o:PixelsPerInch>96</o:PixelsPerInch>
			</o:OfficeDocumentSettings>
	</xml>
	<![endif]-->
			<!--[if !mso]><!-- -->
			<link href="https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i" rel="stylesheet">
			<!--<![endif]-->
	</head>
	
	<body>
			<div class="es-wrapper-color">
					<!--[if gte mso 9]>
				<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
					<v:fill type="tile" color="#f6f6f6"></v:fill>
				</v:background>
			<![endif]-->
					<table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0">
							<tbody>
									<tr>
											<td class="esd-email-paddings" valign="top">
													<table class="es-content esd-header-popover" cellspacing="0" cellpadding="0" align="center">
															<tbody>
																	<tr>
																			<td class="esd-stripe" align="center">
																					<table class="es-content-body" width="600" cellspacing="0" cellpadding="0" align="center" style="background-color: transparent;">
																							<tbody>
																									<tr>
																											<td class="esd-structure es-p20t es-p20r es-p20l" align="left" style="border-radius: 10px 10px 0px 0px; background-color: #ffffff;" bgcolor="#ffffff">
																													<table width="100%" cellspacing="0" cellpadding="0">
																															<tbody>
																																	<tr>
																																			<td class="esd-container-frame" width="560" valign="top" align="center">
																																					<table width="100%" cellspacing="0" cellpadding="0">
																																							<tbody>
																																									<tr>
																																											<td align="center" class="esd-block-image" style="font-size: 0px;">
																																													<a target="_blank"><img class="adapt-img" src="https://vfqdez.stripocdn.email/content/guids/CABINET_c5b3213175f1f8dc7c0dff5001a42fcc/images/1_7MF.png" alt style="display: block;" width="205"></a>
																																											</td>
																																									</tr>
																																							</tbody>
																																					</table>
																																			</td>
																																	</tr>
																															</tbody>
																													</table>
																											</td>
																									</tr>
																									<tr>
																											<td class="es-p20t es-p20r es-p20l esd-structure" align="left" bgcolor="#ffffff" style="background-color: #ffffff;">
																													<table width="100%" cellspacing="0" cellpadding="0">
																															<tbody>
																																	<tr>
																																			<td class="esd-container-frame" width="560" valign="top" align="center">
																																					<table width="100%" cellspacing="0" cellpadding="0">
																																							<tbody>
																																									<tr>
																																											<td align="center" class="esd-block-image" style="font-size: 0px;">
																																													<a target="_blank"><img class="adapt-img" src="https://vfqdez.stripocdn.email/content/guids/CABINET_c5b3213175f1f8dc7c0dff5001a42fcc/images/happy_studentrafiki_TFS.png" alt style="display: block;" width="250"></a>
																																											</td>
																																									</tr>
																																									<tr>
																																											<td align="center" class="esd-block-text es-p10r es-p10l">
																																													<p style="padding: 0px 10px; margin-bottom: 0; font-family: roboto, 'helvetica neue', helvetica, arial, sans-serif; font-size: 23px; padding: 0px 10px;"><strong>Olá ${username}, seja bem vindo!</strong></p>
																																											</td>
																																									</tr>
																																							</tbody>
																																					</table>
																																			</td>
																																	</tr>
																															</tbody>
																													</table>
																											</td>
																									</tr>
																									<tr>
																											<td class="es-p20t es-p20r es-p20l esd-structure" align="left" bgcolor="#ffffff" style="background-color: #ffffff;">
																													<table width="100%" cellspacing="0" cellpadding="0">
																															<tbody>
																																	<tr>
																																			<td class="esd-container-frame" width="560" valign="top" align="center">
																																					<table width="100%" cellspacing="0" cellpadding="0">
																																							<tbody>
																																									<tr>
																																											<td align="center" class="esd-block-text es-p20b es-p10r es-p10l">
																																													<p style="font-family: roboto, &quot;helvetica neue&quot;, helvetica, arial, sans-serif; font-size: 16px; color: #999999; padding: 0px 15px;">Seu e-mail foi vinculado a uma conta na empresa ${companyName} em ${date}.</p>
																																											</td>
																																									</tr>
																																							</tbody>
																																					</table>
																																			</td>
																																	</tr>
																															</tbody>
																													</table>
																											</td>
																									</tr>
																							</tbody>
																					</table>
																			</td>
																	</tr>
															</tbody>
													</table>
													<table cellpadding="0" cellspacing="0" class="es-content esd-footer-popover" align="center">
															<tbody>
																	<tr>
																			<td class="esd-stripe" align="center">
																					<table class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600" style="background-color: transparent;">
																							<tbody>
																									<tr>
																											<td class="esd-structure es-p20" align="left" bgcolor="#013B5D" style="padding: 10px; background-color: #013b5d; border-radius: 0px 0px 10px 10px;">
																													<!--[if mso]><table width="560" cellpadding="0" cellspacing="0"><tr><td width="178" valign="top"><![endif]-->
																													<table cellpadding="0" cellspacing="0" class="es-left" align="left">
																															<tbody>
																																	<tr>
																																			<td width="178" class="es-m-p0r esd-container-frame es-m-p20b" valign="top" align="center">
																																					<table cellpadding="0" cellspacing="0" width="100%">
																																							<tbody>
																																									<tr>
																																											<td align="center" class="esd-block-image" style="font-size: 0px;">
																																													<a target="_blank" class="rollover"><img class="adapt-img rollover-first" src="https://vfqdez.stripocdn.email/content/guids/CABINET_c5b3213175f1f8dc7c0dff5001a42fcc/images/group_13.png" alt style="display: block;" width="130">
																																															<div style="mso-hide:all;"><img class="adapt-img rollover-second" style="max-height: 0px; display: none;" src="https://vfqdez.stripocdn.email/content/guids/CABINET_c5b3213175f1f8dc7c0dff5001a42fcc/images/group_13.png" width="130"></div>
																																													</a>
																																											</td>
																																									</tr>
																																							</tbody>
																																					</table>
																																			</td>
																																	</tr>
																															</tbody>
																													</table>
																													<!--[if mso]></td><td width="25"></td><td width="357" valign="top"><![endif]-->
																													<table cellpadding="0" cellspacing="0" align="right">
																															<tbody>
																																	<tr>
																																			<td width="357" align="left" class="esd-container-frame">
																																					<table cellpadding="0" cellspacing="0" width="100%">
																																							<tbody>
																																									<tr>
																																											<td align="right" class="esd-block-text es-p10">
																																													<p style="padding: 0px 15px; font-family: roboto, 'helvetica neue', helvetica, arial, sans-serif; color: #ffffff;">Os vencedores nunca desistem de tentar!</p>
																																											</td>
																																									</tr>
																																							</tbody>
																																					</table>
																																			</td>
																																	</tr>
																															</tbody>
																													</table>
																													<!--[if mso]></td></tr></table><![endif]-->
																											</td>
																									</tr>
																									<tr>
																											<td class="esd-structure es-p20" esd-general-paddings-checked="false" align="left" esd-custom-block-id="14335">
																													<!--[if mso]><table width="560" cellpadding="0" cellspacing="0"><tr><td width="356" valign="top"><![endif]-->
																													<table class="es-left" cellspacing="0" cellpadding="0" align="left">
																															<tbody>
																																	<tr>
																																			<td class="es-m-p20b esd-container-frame" width="356" align="left">
																																					<table width="100%" cellspacing="0" cellpadding="0">
																																							<tbody>
																																									<tr>
																																											<td style="color: #607d8b" class="esd-block-text" esdev-links-color="#666666" align="left">
																																													<p style="line-height: 150%;">© ${year}. All rights reserved.</p>
																																													<p style="line-height: 150%;">Você está recebendo este e-mail porque se inscreveu em nosso site.<br></p>
																																											</td>
																																									</tr>
																																							</tbody>
																																					</table>
																																			</td>
																																	</tr>
																															</tbody>
																													</table>
																													<!--[if mso]></td><td width="20"></td><td width="184" valign="top"><![endif]-->
																													<table cellspacing="0" cellpadding="0" align="right">
																															<tbody>
																																	<tr>
																																			<td class="esd-container-frame" width="184" align="left">
																																					<table width="100%" cellspacing="0" cellpadding="0">
																																							<tbody>
																																									<tr>
																																											<td style="color: #607d8b" class="esd-block-text es-m-txt-c es-p10b" align="left">
																																													<p>Email: speedpointsystem@gmail.com</p>
																																											</td>
																																									</tr>
																																									<tr>
																																											<td class="esd-block-social es-p5t" align="left" style="font-size: 0px;">
																																													<table class="es-table-not-adapt es-social" cellspacing="0" cellpadding="0">
																																															<tbody>
																																																	<tr>
																																																			<td class="es-p10r" valign="top" align="center">
																																																					<a href><img style="margin-right: 5px;" title="Twitter" src="https://vfqdez.stripocdn.email/content/assets/img/social-icons/circle-colored/twitter-circle-colored.png" alt="Tw" width="24" height="24"></a>
																																																			</td>
																																																			<td class="es-p10r" valign="top" align="center">
																																																					<a href><img style="margin-right: 5px;" title="Facebook" src="https://vfqdez.stripocdn.email/content/assets/img/social-icons/circle-colored/facebook-circle-colored.png" alt="Fb" width="24" height="24"></a>
																																																			</td>
																																																			<td valign="top" align="center">
																																																					<a href><img style="margin-right: 5px;" title="Youtube" src="https://vfqdez.stripocdn.email/content/assets/img/social-icons/circle-colored/youtube-circle-colored.png" alt="Yt" width="24" height="24"></a>
																																																			</td>
																																																	</tr>
																																															</tbody>
																																													</table>
																																											</td>
																																									</tr>
																																							</tbody>
																																					</table>
																																			</td>
																																	</tr>
																															</tbody>
																													</table>
																													<!--[if mso]></td></tr></table><![endif]-->
																											</td>
																									</tr>
																							</tbody>
																					</table>
																			</td>
																	</tr>
															</tbody>
													</table>
											</td>
									</tr>
							</tbody>
					</table>
			</div>
	</body>
	
	</html>`;
}
