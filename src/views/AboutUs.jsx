import React from 'react';
import './AboutUs.css'
import ceo from '../assets/ceo.png'
import cto from '../assets/cto.png'
import hod from '../assets/hod.png'
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function AboutUs() {
  return (
    <Container className="my-5 pt-5 ">
      <Row className="justify-content-center mb-5 pt-5">
        <Col md={8} className="text-start">
          <h1 className="display-4">Neden Logo Yazılım ERP?</h1>
          <p className="lead">
            <div>
              <div>
                <div>
                  <h6>E-D&Ouml;N&Uuml;Ş&Uuml;M</h6>
                </div>
                <div>
                  <p><a href="https://www.logo.com.tr/">Logo Yazılım</a>, ERP &Ccedil;&ouml;z&uuml;mlerinin kullanıcılarına her ge&ccedil;en g&uuml;n daha iyi hizmet verebilmek i&ccedil;in yeni &ccedil;&ouml;z&uuml;mler &uuml;retmek, mevcut &ccedil;&ouml;z&uuml;mleri geliştirmek, değişen teknoloji koşullarında &ouml;nc&uuml; &ccedil;&ouml;z&uuml;mler oluşturmak amacıyla kaynaklarının en b&uuml;y&uuml;k b&ouml;l&uuml;m&uuml;n&uuml; araştırma ve geliştirmeye ayırmaktadır. &Ccedil;alışanlarının yarısı AR-GE departmanında g&ouml;rev alan LOGO Yazılım, değişimin ve e-d&ouml;n&uuml;ş&uuml;m&uuml;n son derece hızlı yaşandığı bir ortamda yaptığı AR-GE yatırımları ile geleceği yazmaya devam etmektedir.</p>
                </div>
                <div>
                  <h6>MEVZUATA UYUMLULUK</h6>
                </div>
                <div>
                  <p>LOGO Yazılım ERP &Ccedil;&ouml;z&uuml;mleri, ilk g&uuml;n&uuml;nden itibaren g&uuml;ncel mevzuatlara uyum sağlayıp, değişikliklere hızlıca ayak uydurmaktadır. e-D&ouml;n&uuml;ş&uuml;m başta olmak &uuml;zere bir&ccedil;ok değişikliğe &ouml;nc&uuml;l&uuml;k etmiştir.</p>
                </div>
                <div>
                  <h6>ZENGİN MOD&Uuml;LER YAPISI</h6>
                </div>
                <div>
                  <p>Muhasebe ve Finans Y&ouml;netimi, &Uuml;retim Y&ouml;netimi, Malzeme Y&ouml;netimi, B&uuml;t&ccedil;e Y&ouml;netimi, Proje Y&ouml;netimi, Bakım Y&ouml;netimi, Varlık Y&ouml;netimi, Satınalma Y&ouml;netimi, Talep Y&ouml;netimi, Tedarik Zinciri Y&ouml;netimi, M&uuml;şteri İlişkileri Y&ouml;netimi, Dış Ticaret, İş Zekası ve İnsan Kaynakları gibi bir işletmenin sahip olabileceği t&uuml;m fonksiyonlar LOGO ERP &Ccedil;&ouml;z&uuml;mleri ile y&ouml;netilebilmektedir. Logo ERP &ccedil;&ouml;z&uuml;mleri, kalite standartları &ccedil;er&ccedil;evesinde s&uuml;rekli geliştirilmekte; t&uuml;m kurumsal bilgi, işlem ve s&uuml;re&ccedil;lerin &ouml;nceden tanımlanmış standartlar &ccedil;er&ccedil;evesinde, g&uuml;venli bir platforma taşınmasını, y&ouml;netilmesini ve denetlenmesini sağlamaktadır.</p>
                </div>
                <div>
                  <h6>DİKEY &Ccedil;&Ouml;Z&Uuml;MLER</h6>
                </div>
                <div>
                  <p>Logo, kendi geliştirdiği kurumsal kaynak y&ouml;netimi, iş zek&acirc;sı ve e-devlet &ccedil;&ouml;z&uuml;mleri gibi y&uuml;ksek teknolojiyle oluşturulan &uuml;r&uuml;n ve hizmetlerin yanı sıra ekosisteminde yer alan &Ccedil;&ouml;z&uuml;m Ortakları&rsquo;nın geliştirdiği 1000&rsquo;den fazla sekt&ouml;rel ve dikey &ccedil;&ouml;z&uuml;m&uuml; de kullanıcılarına sunmaktadır.</p>
                </div>
                <div>
                  <h6>EKİBİMİZ</h6>
                </div>
                <div>
                  <p>Logo eko sisteminde, ERP kurulum ve danışmanlık destek s&uuml;re&ccedil;leri, yetkin ve yetkili Logo iş ortakları tarafından y&uuml;r&uuml;t&uuml;lmektedir. Ekibimiz ise 20 yılı aşkın bir s&uuml;redir, LOGO Yazılım ERP &Ccedil;&ouml;z&uuml;mleri konusunda uzmanlaşmış ekibi ile hizmet vermeye devam eden LOGO Yazılım Kurumsal İş ve &Ccedil;&ouml;z&uuml;m Ortağı&rsquo;dır.</p>
                </div>
              </div>
            </div>
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6} className="mb-4">
          <Card className="shadow-sm border-0">
            <Card.Body className="text-center text-white">
              <Card.Title className="mb-3">Vizyonumuz</Card.Title>
              <Card.Text>
                Vizyonumuz, müşterilere en üst düzeyde değer sunarken, teknolojiyi kullanarak iş dünyasını dönüştürmektir. Umel Bilişim ve Danışmanlık olarak, teknolojiye olan tutkumuzla, işletmelerin potansiyelini artırmak için en son teknolojileri ve çözümleri kullanıyoruz.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card className="shadow-sm border-0">
            <Card.Body className="text-center text-white">
              <Card.Title className="mb-3">Misyonumuz</Card.Title>
              <Card.Text>
                Misyonumuz, müşterilerin ihtiyaçlarına odaklanmak ve onlara özelleştirilmiş çözümler sunarak iş süreçlerini optimize etmelerine yardımcı olmaktır. Müşterilerin başarısı bizim başarımızdır ve bu nedenle onların ihtiyaçlarını anlamak ve en iyi çözümleri sunmak için büyük çaba sarf ediyoruz.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
      </Row>
      <Row className="justify-content-center mb-4">
        <Col md={8} className="text-center">
          <h2 className="mb-4 mt-5">Ekibimizi Tanıyın</h2>
          <p className="lead">
            Uzman ekibimiz, teknolojiye olan tutkusuyla, müşterilerine benzersiz çözümler sunmak için yılların deneyimini bir araya getiriyor. Her biri kendi alanında uzmanlaşmış profesyonellerden oluşan ekibimiz, müşterilerimizin ihtiyaçlarını anlamak ve onlara en iyi çözümleri sunmak için sürekli olarak kendini geliştiriyor. Ekibimiz, müşterilerimizin başarısı için çalışırken, aynı zamanda teknoloji dünyasındaki gelişmeleri takip ederek yenilikçi çözümler sunmaya devam ediyor.
          
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={3} className="mb-4">
          <Card className="shadow-sm border-0">
            <Card.Img variant="top" src={ceo} />
            <Card.Body className="text-center text-white">
              <Card.Title>Habib Kaska</Card.Title>
              <Card.Text>CEO</Card.Text>
            </Card.Body>
          </Card>
        </Col>
       
      </Row>
      <Row className="hidden  none d-none justify-content-center mb-5">
        <Col md={8} className="text-center">
          <h2 className="mb-4 mt-5">Our History</h2>
          <p className="lead">
            TechySoftware was founded in 2010 with the goal of revolutionizing the software industry. Over the years, we have grown exponentially, constantly evolving to meet the needs of our clients.
          </p>
        </Col>
      </Row>
      <Row className="hidden  none d-none justify-content-center">
        <Col md={4} className="mb-4">
          <Card className="shadow-sm border-0">
            <Card.Body className="text-center text-white">
              <Card.Title className="mb-3">2010</Card.Title>
              <Card.Text>
                TechySoftware was founded with a small team of passionate developers.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="shadow-sm border-0">
            <Card.Body className="text-center text-white">
              <Card.Title className="mb-3">2015</Card.Title>
              <Card.Text>
                We launched our first major product, which quickly gained popularity in the market.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="shadow-sm border-0">
            <Card.Body className="text-center text-white">
              <Card.Title className="mb-3">2020</Card.Title>
              <Card.Text>
                TechySoftware expanded globally, establishing offices in multiple countries.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
